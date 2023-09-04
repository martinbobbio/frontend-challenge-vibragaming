import { FAIcon } from '@/components';
import { ActionsStyled, DeleteButton, RoteteButton } from './Actions.styled';
import { faClockRotateLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

interface ActionProps {
  onClick: () => void;
  onRotate: () => void;
}

/**
 * Functional component that render component analogic clock of clocks list.
 *
 * @return React.ReactElement <Actions/>
 */
const Actions = ({ onClick, onRotate }: ActionProps) => {
  return (
    <ActionsStyled>
      <DeleteButton
        size='small'
        sx={{ position: 'absolute' }}
        onClick={onClick}
      >
        <FAIcon icon={faXmark} size='lg' />
      </DeleteButton>
      <RoteteButton
        size='small'
        sx={{
          position: 'absolute',
        }}
        onClick={onRotate}
      >
        <FAIcon icon={faClockRotateLeft} size='lg' />
      </RoteteButton>
    </ActionsStyled>
  );
};

export default Actions;
