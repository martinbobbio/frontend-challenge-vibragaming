import { Chip } from '@mui/material';
import { Center, DetailsStyled, Name, Time, Date } from './Details.styled';
import { adapterTimezoneEntity } from '@/adapters';

interface DetailProps {
  timezone: adapterTimezoneEntity;
  actions: React.ReactNode;
}

/**
 * Functional component that render component details of clocks.
 *
 * @return React.ReactElement <Details/>
 */
const Details = ({ timezone, actions }: DetailProps) => {
  return (
    <DetailsStyled>
      <Center>
        <Name>{timezone.shortname || timezone.name}</Name>
        <Date>{timezone.date}</Date>
        <Time>{timezone.time}</Time>

        {actions}
      </Center>
      <Chip
        className='group'
        size='small'
        label={timezone.group}
        color='primary'
      />
      {timezone.subgroup && (
        <Chip size='small' label={timezone.subgroup} color='primary' />
      )}
    </DetailsStyled>
  );
};

export default Details;
