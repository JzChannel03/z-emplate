import axios from "axios";
import { useApiStore } from "./api.zustand";

const useAxiosConfig = () => {
  //TODO: Pass as param the selected api url with the default option selected
  const { apiUrl, config } = useApiStore();

  const axiosConfig = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });

  return axiosConfig;
};

export default useAxiosConfig;
