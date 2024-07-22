import { OptionalParams } from "../interfaces/https";
import { HttpMethods } from "../services/api-service/api-methods.https";
import AxiosInstance from "../services/api-service/api-config.axios";
import { ApiConfigContext } from "@z-emplate/providers/ApiServices.provider";
import { useContext } from "react";

export const useApiService = ({
  configSelected,
}: {
  configSelected?: number;
}) => {
  console.log("configByDefault: ", configSelected);

  const { configByDefault, setConfigByDefault } = useContext(ApiConfigContext);

  //TODO: Mejorar lógica de selección de la configuración
  if (configSelected !== undefined) {
    setConfigByDefault(configSelected);
  }
  const axiosInstance = AxiosInstance(
    configByDefault ?? { config: { baseUrl: "https://pokeapi.co/api/v2/" } }
  );
  console.log(configByDefault);
  const { GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS } =
    HttpMethods(axiosInstance);

  const get = <T>(url: string, optionalParams?: OptionalParams): Promise<T> => {
    return GET<T>(url, optionalParams);
  };
  const post = <T, U>(
    url: string,
    data: U,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    return POST<T, U>(url, data, optionalParams);
  };
  const put = <T, U>(
    url: string,
    data: U,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    return PUT<T, U>(url, data, optionalParams);
  };
  const deleteMethod = <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    return DELETE<T>(url, optionalParams);
  };
  const patch = <T, U>(
    url: string,
    data: U,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    return PATCH<T, U>(url, data, optionalParams);
  };
  const head = <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    return HEAD<T>(url, optionalParams);
  };
  const options = <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    return OPTIONS<T>(url, optionalParams);
  };

  return {
    get,
    post,
    put,
    delete: deleteMethod,
    patch,
    head,
    options,
  };
};
