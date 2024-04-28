import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { redirect } from '@solidjs/router'

type Res<T> = {
  code: number
  message?: string
  data: T
  success: boolean
}

interface RequestOptions {
  globalErrorMsg?: boolean
  globalSuccessMsg?: boolean
}

const instance: AxiosInstance = axios.create({
  withCredentials: false,
  timeout: 5000
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(res.message || 'Error')
    }
    if (res.code == 401) {
      throw redirect("/login")
    }
    return res
  },
  (error: AxiosError) => {
    console.log('err' + error)
    return Promise.reject(error.message)
  }
)

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, config)
  },

  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return instance.post(url, data, config)
  },

  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return instance.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.delete(url, config)
  }
}
