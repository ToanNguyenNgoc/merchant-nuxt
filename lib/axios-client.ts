import axios from 'axios'
import queryString from 'query-string'
import { key } from '~/constant'
import { IRefreshToken, IResponse } from '~/interfaces'
import { storage } from '~/utils'

export const baseURL = 'https://devapi.myspa.vn/v1'
export const axiosClient = axios.create({
  // baseURL: baseURL,
  headers: {
    'Accept ': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storage().getItem('nuxt_tk', 'local')}`
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
    indexes: false
  }
})
axiosClient.interceptors.request.use(async (config) => {
  const { refresh, refresh_token } = validRefreshToken()
  if (refresh) {
    try {
      const response = await axios.post<IResponse<IRefreshToken>>(
        `${useRuntimeConfig().public.apiURL}/customers/auth/refresh_token`,
        { refresh_token: refresh_token }
      )
      storage().setItem(key.TK, response?.data?.data?.token, 'local')
      storage().setItem(key.TKE, response.data?.data?.token_expired_at, 'local')
      config.headers.Authorization = `Bearer ${response?.data?.data?.token}`
    } catch (error) { }
  }
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
const validRefreshToken = () => {
  let refresh = false
  const { getItem } = storage()
  const dateString = getItem(key.TKE, 'local')
  const token = getItem(key.TK, 'local')
  const refresh_token = getItem(key.RTK, 'local')
  if (dateString) {
    const date = new Date()
    const dateObject = new Date(dateString);
    const milliseconds = dateObject.getTime();
    const timeCur = date.getTime()
    if ((timeCur > milliseconds) && token && refresh_token) {
      refresh = true
    }
  }
  return { refresh, token, refresh_token }
}
