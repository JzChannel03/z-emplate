import axios from "axios";
import { HttpInformation } from "../../interfaces/https";

const AxiosInstance = ({ config }: HttpInformation) => {
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
