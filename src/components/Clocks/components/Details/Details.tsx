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
        <Name>{timezone.name}</Name>
        <Date>{timezone.date}</Date>
        <Time>{timezone.time}</Time>
        <Chip label={timezone.group} color='primary' />
        {actions}
      </Center>
    </DetailsStyled>
  );
};

export default Details;
