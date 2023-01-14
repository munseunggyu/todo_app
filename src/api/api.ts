import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("Access Token");
  if (token) {
    config.headers = {
      Authorization: token,
    };
  }
  return config;
});

export { api };
