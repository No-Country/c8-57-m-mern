import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://back-fame-app.up.railway.app/',
});

export default axiosClient;
