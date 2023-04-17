import { axiosClient } from "./axios-client"
import { BodyRegister } from "./interface"

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
  register(body: BodyRegister) {
    return axiosClient.post(`${useRuntimeConfig().public.apiURL}/customers/auth/register`, body)
  }
}
export const request = new Request()
