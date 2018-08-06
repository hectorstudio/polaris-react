import axios from 'axios'

import { getBaseUrl } from 'Helpers'

const isInitialSetup = () => {
    let url = `${getBaseUrl()}/m/v1/user/setup`;

    axios.post(url).then(response => {
        return response.data
    });
}

export default isInitialSetup