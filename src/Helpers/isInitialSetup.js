import axios from 'axios';

import { getBaseUrl } from 'Helpers';

const isInitialSetup = () => {
  const url = `${getBaseUrl()}/m/v1/user/setup`;
  let initialSetup = false;

  axios.post(url).then(response => {
    initialSetup = response.data
  });

  return initialSetup
};

export default isInitialSetup;
