import axios from 'axios'
import { getBaseUrl } from 'Helpers'

export const CREATE_USER = (data) => {
    let url = `${getBaseUrl()}/m/v1/user`;

    return axios.post(url, data)
}

export default CREATE_USER