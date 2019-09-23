import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gestaoopme.herokuapp.com/api/',
});

export default api;
