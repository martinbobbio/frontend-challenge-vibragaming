import { adapterTimezoneEntity } from '@/adapters';
import {
  AnimationCardFlip,
  AnimationFadeIn,
  AnimationFadeOut,
} from '@/components';
import { API } from '@/constants';
import { Actions, AnalogicClock, Details } from './components';
import { AlertCustom, ClocksStyled } from './Clocks.styled';
import { Grid } from '@mui/material';
import { useState } from 'react';

interface ClocksProps {
  current: adapterTimezoneEntity[];
  onRefreshOptions: () => void;
}

/**
 * Functional component that render component clocks.
 *
 * @return React.ReactElement <Clocks/>
 */
const Clocks = ({ current, onRefreshOptions }: ClocksProps) => {
  const [flippedItems, setFlippedItems] = useState(new Set());
  const [deletedItems, setDeletedItems] = useState(new Set());
  console.log('AAA', deletedItems);
  const shouldRender = {
    content: !!current.length,
    skeletons: !current.length,
  };

  /**
   * Function that rotate the view
   *
   * @return void
   */
  const handleRotate = (timezone: adapterTimezoneEntity) => {
    if (flippedItems.has(timezone.original)) {
      flippedItems.delete(timezone.original);
    } else {
      flippedItems.add(timezone.original);
    }
    setFlippedItems(new Set(flippedItems));
  };

  /**
   * Function that activate fade out
   *
   * @return void
   */
  const handleFadeout = (timezone: adapterTimezoneEntity) => {
    if (!deletedItems.has(timezone.original)) {
      deletedItems.add(timezone.original);
      setDeletedItems(new Set(deletedItems));
    }
  };

  /**
   * Function that activate fade out
   *
   * @return void
   */
  const handleCleanDeleted = () => {
    deletedItems.clear();
    setDeletedItems(new Set(deletedItems));
  };

  /**
   * Function that handle the click and delete a timezone interacting with backend
   *
   * @param timezone for the option to send and delete in backend
   * @return void
   */
  const handleDelete = async (timezone: adapterTimezoneEntity) => {
    await API.delete(`/timezones/${timezone.original}`);
    onRefreshOptions();
  };

  const renderCardFlip = (timezone: adapterTimezoneEntity) => (
    <AnimationCardFlip
      flipped={!flippedItems.has(timezone.original)}
      front={
        <Details
          timezone={timezone}
          actions={
            <Actions
              onClick={() => handleFadeout(timezone)}
              onRotate={() => handleRotate(timezone)}
            />
          }
        />
      }
      back={
        <AnalogicClock
          timezone={timezone}
          actions={
            <Actions
              onClick={() => handleFadeout(timezone)}
              onRotate={() => handleRotate(timezone)}
            />
          }
        />
      }
    />
  );

  return (
    <ClocksStyled>
      <Grid container spacing={2}>
        {shouldRender.content &&
          current.map((timezone, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {!deletedItems.has(timezone.original) && (
                <AnimationFadeIn onFadeInComplete={() => handleCleanDeleted()}>
                  {renderCardFlip(timezone)}
                </AnimationFadeIn>
              )}
              {deletedItems.has(timezone.original) && (
                <AnimationFadeOut
                  onFadeOutComplete={() => handleDelete(timezone)}
                >
                  {renderCardFlip(timezone)}
                </AnimationFadeOut>
              )}
            </Grid>
          ))}
        {shouldRender.skeletons && (
          <AlertCustom severity='info'>
            You haven't charged any clocks yet
          </AlertCustom>
        )}
      </Grid>
    </ClocksStyled>
  );
};

export default Clocks;
