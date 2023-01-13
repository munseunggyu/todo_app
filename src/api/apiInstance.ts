import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

export { apiInstance };
