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

    let token = document.cookie;
    // console.log(token);
    
   //let token = localStorage.getItem('token');
   // const token = 'Bear' + `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoyLFwidXNlcm5hbWVcIjpcImtpZW5cIn0iLCJpYXQiOjE2ODMwNDU5ODgsImV4cCI6MTY4MzEzMjM4OH0.IR-v8QPaIC95fY3KTP1fPDCDwQO-AQXjgZGbXsrapBmo9QZMl_cptwlJ1ETbwVwPh-xnzY28eNstF2J5p9Y21w`;
    if (token) config.headers.Authorization = token;
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