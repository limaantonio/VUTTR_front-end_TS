import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deploy-vuttr.herokuapp.com/',
});

export default api;