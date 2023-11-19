import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8888',
  timeout: 20000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
});

