import axios from "axios";
import ApiStore from "./api.store";

const AxiosInstance = () => {
  const {
    configByDefault: { config },
  } = ApiStore.getInstance();

  console.log(config);

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
