import axios from 'axios';

import { getBaseUrl } from 'Helpers';

const isInitialSetup = () => {
  const url = `${getBaseUrl()}/m/v1/user/setup`;

  axios.post(url).then(response => response.data);
};

export default isInitialSetup;
