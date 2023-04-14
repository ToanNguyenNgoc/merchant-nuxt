import axios from 'axios'
import queryString from 'query-string'
import { storage } from '~/utils'

export const baseURL = 'https://devapi.myspa.vn/v1'
export const axiosClient = axios.create({
  // baseURL: baseURL,
  headers: {
    'Accept ': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storage().getItem('nuxt_tk','local')}`
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
    indexes: false
  }
})
axiosClient.interceptors.request.use(async (config) => {
  return config
})
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    throw error
  }
)
