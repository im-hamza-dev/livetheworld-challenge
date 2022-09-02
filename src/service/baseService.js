import axios from "axios";

let baseURL = "https://ltw-cms-stg.herokuapp.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
export default axiosInstance;

// axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         axiosInstance.defaults.headers.common['refresh_token'] = refreshToken;
