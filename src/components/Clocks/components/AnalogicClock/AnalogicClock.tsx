import { useEffect, useState } from 'react';
import { AnalogicClockStyled } from './AnalogicClock.styled';
import dayjs from 'dayjs';
import { adapterTimezoneEntity } from '@/adapters';

interface AnalogicClock {
  actions: React.ReactNode;
  timezone: adapterTimezoneEntity;
}

/**
 * Functional component that render component analogic clock of clocks list.
 *
 * @return React.ReactElement <AnalogicClock/>
 */
const AnalogicClock = ({ actions, timezone }: AnalogicClock) => {
  const [time, setTime] = useState(dayjs().tz(timezone.original));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(dayjs().tz(timezone.original));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timezone]);

  return (
    <AnalogicClockStyled>
      <div className='clock'>
        <div
          className='hour_hand'
          style={{
            transform: `rotateZ(${time.hour() * 30}deg)`,
          }}
        />
        <div
          className='min_hand'
          style={{
            transform: `rotateZ(${time.minute() * 6}deg)`,
          }}
        />
        <div
          className='sec_hand'
          style={{
            transform: `rotateZ(${time.second() * 6}deg)`,
          }}
        />
        <span className='twelve'>12</span>
        <span className='one'>1</span>
        <span className='two'>2</span>
        <span className='three'>3</span>
        <span className='four'>4</span>
        <span className='five'>5</span>
        <span className='six'>6</span>
        <span className='seven'>7</span>
        <span className='eight'>8</span>
        <span className='nine'>9</span>
        <span className='ten'>10</span>
        <span className='eleven'>11</span>
      </div>
      {actions}
    </AnalogicClockStyled>
  );
};

export default AnalogicClock;
