import axios from "axios";
import {
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  USER_LOCAL_STORE,
} from "../utils/constant";

const API = axios.create({
  //baseURL: process.env.URL,
  baseURL: 'http://localhost:8080',
});

export const apiBase = (options) =>
  new Promise((resolve, reject) => {
    API(options)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });

export const defaultRequestHeader = () => {
  const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORE));
  if (user && user.token) {
    return {
      Authorization: "Bearer " + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4MjQzNzQ5MCwiZXhwIjoxNjgyNTIzODkwfQ.Fuflkb9iLh5Ylt6ba7pgEFNYHAbS00MID5ZNgsHjvChj1p6cJOPwvmxJbs6hLO-qusxjZ1QptvFqMRwp51vowQ'
    };
  }
  return {};
};

const err = (error) => {
  const messError = error;
  const { response } = messError;
  if (response) {
    const { data, status } = response;
    switch (status) {
      case UNAUTHORIZED:
        messError.message = "Error " + UNAUTHORIZED;
        break;
      case FORBIDDEN:
        messError.message = `Error ${FORBIDDEN}`;
        break;
      case NOT_FOUND:
        messError.message = `Error ${NOT_FOUND}`;
        break;
      case INTERNAL_SERVER_ERROR:
        messError.message = `Error ${INTERNAL_SERVER_ERROR}`;
        break;
      default:
        messError.message = data.message;
    }
  }
  return Promise.reject(error);
};

API.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      ...config.headers,
      ...defaultRequestHeader(),
    },
  }),
  err
);

API.interceptors.response.use((response) => response, err);