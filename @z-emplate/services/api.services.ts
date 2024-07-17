import { objectIsEmpty } from "../utils/object.functions";
import { useApiStore } from "./api-service/api.zustand";
import { z } from "zod";

interface ApiServicesConfig {
  apiUrl: string;
  token?: string;
}

const ApiServicesConfig = () => {
  const { setUrl, apiUrl } = useApiStore();

  const setApiConfig = ({ apiUrl, token }: ApiServicesConfig) => {
    const configSchema = z.object({
      apiUrl: z.string().url(),
      token: z.string().optional(),
    });

    const parsedConfig = configSchema.parse({ apiUrl, token });
    console.log(parsedConfig, apiUrl);

    //TODO: Add universal error handling component and delete this throw
    if (objectIsEmpty(parsedConfig)) {
      throw new Error("Invalid config");
    }

    setUrl(apiUrl);
  };

  const getApiConfig = () => {
    return {
      apiUrl,
    };
  };

  return {
    setApiConfig,
    getApiConfig,
  };
};

export default ApiServicesConfig;
