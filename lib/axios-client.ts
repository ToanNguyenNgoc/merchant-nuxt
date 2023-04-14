import axios from 'axios'
import queryString from 'query-string'
import { storage } from '~/utils'

const { getItem } = storage()
export const baseURL = 'https://devapi.myspa.vn/v1'
export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Accept ': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer 6437a61404ca6482700ae013|ssoPha2dLb4YCZj1SN7v`
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
