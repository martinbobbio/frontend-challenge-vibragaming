import { Paper } from '@mui/material';
import { AnimationsStyled } from './Animations.styled';
import { useSpring, animated } from 'react-spring';

interface AnimationFadeInProps {
  children: React.ReactNode;
  onFadeInComplete?: () => void;
}

interface AnimationFadeOutProps {
  children: React.ReactNode;
  onFadeOutComplete?: () => void;
}

interface AnimationCardFlipProps {
  front: React.ReactNode;
  back: React.ReactNode;
  flipped: boolean;
}

/**
 * Functional component that render component animation of fade in.
 *
 * @param children for wrapping the content of animation
 * @return React.ReactElement <Animations/>
 */
export const AnimationFadeIn = ({
  children,
  onFadeInComplete,
}: AnimationFadeInProps) => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 1 },
    config: { duration: 750 },
    onRest: () => {
      if (onFadeInComplete) {
        onFadeInComplete();
      }
    },
  });

  return (
    <animated.div style={fadeIn}>
      <AnimationsStyled>{children}</AnimationsStyled>
    </animated.div>
  );
};

/**
 * Functional component that renders a fade out animation.
 *
 * @param children for the content to be faded out.
 * @param onFadeOutComplete for optional callback to be called after fade out completes.
 * @return React.ReactElement
 */
export const AnimationFadeOut = ({
  children,
  onFadeOutComplete,
}: AnimationFadeOutProps) => {
  const fadeOut = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: { duration: 750 },
    onRest: () => {
      if (onFadeOutComplete) {
        onFadeOutComplete();
      }
    },
  });

  return (
    <animated.div style={fadeOut}>
      <AnimationsStyled>{children}</AnimationsStyled>
    </animated.div>
  );
};

/**
 * Functional component that render component animations of card flipping.
 *
 * @param children for wrapping the content of animation
 * @return React.ReactElement <Animations/>
 */
export const AnimationCardFlip = ({
  front,
  back,
  flipped,
}: AnimationCardFlipProps) => {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(400px) rotateY(${flipped ? 0 : 180}deg)`,
  });

  return (
    <>
      {flipped && (
        <animated.div
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
          }}
        >
          <Paper elevation={3} className='card'>
            {front}
          </Paper>
        </animated.div>
      )}

      {!flipped && (
        <animated.div
          style={{
            opacity,
            transform: transform.to((t) => `${t} rotateY(180deg)`),
          }}
        >
          <Paper elevation={3} className='card'>
            {back}
          </Paper>
        </animated.div>
      )}
    </>
  );
};
