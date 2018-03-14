import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://stage-bkbackend.herokuapp.com/'
})

export default axiosInstance;