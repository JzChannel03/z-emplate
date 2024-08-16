import axios from "axios";
import { HttpConfig } from "../../interfaces/https";

const AxiosInstance = (config: HttpConfig) => {
  const axiosConfig = axios.create({
    baseURL: config.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });

  return axiosConfig;
};

export default AxiosInstance;
