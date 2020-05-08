import axios from 'axios';

export var url = 'https://gateway.marvel.com:80/v1/public/'

const api = axios.create({
    baseURL: url
})
export default api;
