import axios from "axios";
// import cookie from 'cookiejs';
// import store from '../store/index';

const API = axios.create();

export const apiBase = (options) =>
  new Promise((resolve, reject) => {
    API(options)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });

API.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ` + token;
    if(config.isFormData) {
      config.headers['Content-Type'] = 'multipart/form-data'}
    else {
      config.headers['Content-Type'] = 'application/json'
    }
    return config;
  },
  async(error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  data => {
    return data;
  },
  async(error) => {
    return Promise.reject(error.response);
  }
);

export default API