import axios from 'axios'
import { onGetLocalStorage } from '../utils/localStorage'
import { AUTHORIZATION } from '../constants'

const axiosApiInstance = axios.create({
  baseURL: 'https://5b15-3-27-159-42.ngrok-free.app',
  headers: {
    Authorization: onGetLocalStorage(AUTHORIZATION)
      ? `Bearer ${onGetLocalStorage(AUTHORIZATION).accessToken}`
      : '',
    'ngrok-skip-browser-warning': true,
    'Content-Type': 'application/json' // Example of setting a default content type
  }
})

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err)
  }
)

export default axiosApiInstance
