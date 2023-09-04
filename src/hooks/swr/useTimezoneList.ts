// Constants
import { adaptTimezoneList, adapterTimezoneOutput } from '@/adapters';
import { API } from '@/constants';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api.
 */
const useTimezoneList = () => {
  const uri = `/timezones`;
  const fetcher: FetcherFn<adapterTimezoneOutput> = async () => {
    const response = await API.get(uri);
    return adaptTimezoneList(response.data);
  };
  return useSWR(`${uri}`, fetcher);
};

export default useTimezoneList;
