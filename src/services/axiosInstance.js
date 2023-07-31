import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: `http://mark.io.vn:3000`
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default axiosApiInstance;
