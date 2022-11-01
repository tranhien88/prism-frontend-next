import axios from 'axios';
import { StorageKeys, getLocalStorage, clearStorage } from './storage';
import { StatusCodes } from 'http-status-codes';
import { isEmpty } from 'lodash';

const API_URL = process.env.NEXT_PUBLIC_API_HOST_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  function (config) {
    if (typeof window !== 'undefined') {
      if(window.location.pathname == '/login'){
        config.headers['X-Auth-Username'] = config.data.username;
        config.headers['X-Auth-Password'] = config.data.password;
      }else{
        const token = getLocalStorage<string>(StorageKeys.TOKEN);
        if (!isEmpty(token) && config.headers && !config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }      
      return config;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const statusCode = error?.response?.status;
    if (statusCode === StatusCodes.UNAUTHORIZED) {
      //if user uses wrong or expired token, clear it then reload
      clearStorage();
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
