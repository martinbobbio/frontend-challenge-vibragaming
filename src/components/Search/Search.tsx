import React from 'react';
import { Autocomplete } from '@mui/material';
import {
  GroupByItem,
  SearchStyled,
  TextFieldCustom,
  WrapperAutocomplete,
} from './Search.styled';
import { adapterTimezoneEntity } from '@/adapters';
import { API } from '@/constants';

interface SearchProps {
  options: adapterTimezoneEntity[];
  onRefreshOptions: () => void;
}

/**
 * Functional component that render component search with select and autocomplete.
 *
 * @param options for show all timezones options
 * @param onRefreshOptions for refreshing when sending to backend
 * @return React.ReactElement <Search/>
 */
const Search = ({ options, onRefreshOptions }: SearchProps) => {
  /**
   * Function that handle the change of select autocomplete and update with backend
   *
   * @param timezone for the option to send to backend
   * @return void
   */
  const handleChange = async (timezone: adapterTimezoneEntity | null) => {
    if (timezone) {
      await API.put(`/timezones/${timezone.original}`);
      onRefreshOptions();
    }
  };

  return (
    <SearchStyled>
      {options && (
        <Autocomplete
          options={options}
          sx={{ width: '100%' }}
          disablePortal
          size='small'
          color='secondary'
          onChange={(_, value) => handleChange(value)}
          groupBy={(option) => option.group}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={() => true}
          renderInput={(params) => (
            <TextFieldCustom {...params} label='Timezone' variant='outlined' />
          )}
          PaperComponent={(props) => <WrapperAutocomplete {...props} />}
          renderGroup={(params) => (
            <React.Fragment key={params.key}>
              <GroupByItem>{params.group}</GroupByItem>
              {params.children}
            </React.Fragment>
          )}
        />
      )}
    </SearchStyled>
  );
};

export default Search;
