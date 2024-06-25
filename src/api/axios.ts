import axiosClient, { AxiosInstance } from "axios";
import { getAccessToken } from "@privy-io/react-auth";
import { clean } from "../utils";

const TIMEOUT = 35000; //15sec
const SERVER_URL =
  import.meta.env.VITE_API_HOST || "http://127.0.0.1:8000";

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
    const token = await getAccessToken();

    if (token && config?.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
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

export default axios;
