import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

axios.interceptors.request.use(
    config => {
        config.headers['id'] = localStorage.getItem('token');
        // config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });