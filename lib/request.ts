import { axiosClient } from "./axios-client"

class Request {
  login(body: any) {
    return axiosClient.post(`${useRuntimeConfig().public.apiURL}/customers/auth/login`, body)
  }
  profile(token?: string) {
    return axiosClient.get(`${useRuntimeConfig().public.apiURL}/customers/auth/profile`, token ? {
      headers: {
        Authorization: `Bearer ${token}`
      }
    } : {})
  }
}
export const request = new Request()
