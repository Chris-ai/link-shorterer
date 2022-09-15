import axios from 'axios'


class ApiService {

    shortLink(link) {
        return axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`)
    }
}

export default new ApiService();