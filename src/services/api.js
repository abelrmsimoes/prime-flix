// Base da URL:
// URL DA API: /movie/now_playing?api_key=f9e39cd3ec3dbff5e2b6ca350c474a33&language=pt-BR

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
