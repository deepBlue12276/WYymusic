import axios from 'axios'
import { Notify } from 'vant'
import  {getToken,setToken} from '@/utils/auth'

let api = 'http://localhost:3000'

const http = axios.create({
  withCredentials: true,   //请求带入cookie
  baseURL: api
})

http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)



http.interceptors.response.use(
  response => response,

  error => {
    Notify(error)
    return Promise.reject(error)
  }
)


export default http