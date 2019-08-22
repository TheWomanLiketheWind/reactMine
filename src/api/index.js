import configUrl from './config.js'
import axios from 'axios'

const Request = axios.create({
  baseURL: configUrl,
  timeout: 3000,
});

Request.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['Authorization'] = 'Basic a3N1ZGlfcGM6a3N1ZGlfcGM='
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Request.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default Request