import axios from "axios";

let baseURL = "https://ltw-cms-stg.herokuapp.com";
let defaultOptions = {
  baseURL: baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
};
const axiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("JWT");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
export default axiosInstance;
