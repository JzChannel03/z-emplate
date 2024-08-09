import { OptionalParams } from "../interfaces/https";
import { HttpMethods } from "../services/api-service/api-methods.https";
import AxiosInstance from "../services/api-service/api-config.axios";
import ApiStore from "@z-emplate/services/api-service/api.store";
import { AxiosInstance as AxiosInstanceType } from "axios";
import { objectIsEmpty } from "@z-emplate/utils/object.functions";

export const useApiService = (
  params: {
    configSelected?: number;
  } = {}
) => {
  const { configByDefault, setConfigByDefault } = ApiStore.getInstance();

  if (!objectIsEmpty(params)) {
    const { configSelected } = params;
    setConfigByDefault(configSelected ?? 0);
  }
  const axiosInstance = AxiosInstance(configByDefault);

  return serviceMethods(axiosInstance);
};

const serviceMethods = (axiosInstance: AxiosInstanceType) => {
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
