import axios from 'axios';
import getBaseUrl from './getBaseUrl';

const isInitialSetup = () => {
  const url = `${getBaseUrl()}/m/v1/user/setup`;

  return axios.post(url);
};

export default isInitialSetup;
