import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export default api