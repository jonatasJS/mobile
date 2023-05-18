import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? 'http://192.168.1.4:3333' : "https://backend-be-the-hero.onrender.com"
})

export default api
