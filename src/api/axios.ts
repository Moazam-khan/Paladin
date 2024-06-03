import axiosClient, { AxiosInstance } from "axios";

import { clean } from "../utils";

const TIMEOUT = 35000; //15sec
const SERVER_URL = import.meta.env.VITE_API_HOST || "";

const axios: AxiosInstance = axiosClient.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: clean({
    t: new Date().getTime(),
  }),

  timeout: TIMEOUT,
});

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");

    if (token && config?.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["x-api-key"] =
      process.env.REACT_APP_TITLE_X_KEY ||
      "9KVvI9QM_98vtE__EYrhCgxFad-6do8fRB9050923uc";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log("err response in intercept resp", err);

    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios
        .post("/api/token/refresh/", {
          refresh: localStorage.getItem("refreshToken"),
        })
        .then((response) => {
          // Store the new access token
          const accessToken = response.data.access;

          localStorage.setItem("accessToken", accessToken);

          // Update the original request with the new token
          originalRequest.headers["Authorization"] = "Bearer " + accessToken;
          // Retry the original request
          return axios(originalRequest);
        })
        .catch((err) => {
          // Handle refresh token failure
          console.error("Refresh token failed: ", err);
        });
    }

    return Promise.reject(error);
  }
);

export default axios;
