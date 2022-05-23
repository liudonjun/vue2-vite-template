import axios from 'axios'
import nProgress from 'NProgress'

const request = axios.create({
  timeout: 9 * 1000,
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: '*/*',
    ContentType: 'application/json;charset=UTF-8',
    AcceptEncoding: 'gzip, deflate, br'
  }
})

request.interceptors.request.use(
  (config) => {
    nProgress.start() // 设置加载进度条(开始..)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    nProgress.done() // 设置加载进度条(结束..)
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { request }
