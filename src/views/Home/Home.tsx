import { Clocks, Footer, Header, Text } from '@/components';
import { useTimezoneList } from '@/hooks';
import { HomeStyled, ClocksContainer } from './Home.styled';
import { Alert, Container, Grid, Skeleton } from '@mui/material';

/**
 * Functional component that render component home.
 *
 * @return React.ReactElement <Home/>
 */
const Home = () => {
  const { data, isLoading, error, mutate } = useTimezoneList();
  const options = data?.list || [];
  const current = data?.current || [];

  /**
   * Function for sending to Header and Search components and update the values.
   *
   * @return void
   */
  const onRefreshOptions = () => mutate();

  return (
    <>
      <Header options={options} onRefreshOptions={onRefreshOptions} />
      <HomeStyled>
        <Container>
          <Text fontWeight='high' size='xl'>
            World Clocks
          </Text>
          <ClocksContainer>
            {!isLoading && !error && (
              <Clocks current={current} onRefreshOptions={onRefreshOptions} />
            )}
            {isLoading && (
              <Grid container spacing={2}>
                {Array(6)
                  .fill(6)
                  .map((_, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                      <Skeleton variant='rectangular' height={224} />
                    </Grid>
                  ))}
              </Grid>
            )}
            {error && (
              <Alert severity='error'>
                Error getting clocks, please try again in a few minutes.
              </Alert>
            )}
          </ClocksContainer>
        </Container>
      </HomeStyled>
      <Footer />
    </>
  );
};

export default Home;
