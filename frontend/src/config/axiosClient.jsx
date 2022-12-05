import axios from 'axios';

const deployUrl = 'https://back-fame-app.up.railway.app/';

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/',
});

export default axiosClient;
