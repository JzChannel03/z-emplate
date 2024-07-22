import { AxiosInstance } from "axios";
import { paramsObjectToQueryString } from "../../utils/url.functions";
import { OptionalParams } from "../../interfaces/https";

export const HttpMethods = (axiosInstance: AxiosInstance) => {
  const buildUrlWithParams = (url: string, params?: OptionalParams) => {
    return params ? paramsObjectToQueryString(params, url) : url;
  };

  const GET = async <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.get(route);
    return response.data as T;
  };

  const POST = async <T, U>(
    url: string,
    data: U,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.post(route, data);
    return response.data as T;
  };

  const PUT = async <T, U>(
    url: string,
    data: U,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.put(route, data);
    return response.data as T;
  };

  const DELETE = async <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.delete(route);
    return response.data as T;
  };

  const PATCH = async <T, U>(
    url: string,
    data: U,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.patch(route, data);
    return response.data as T;
  };

  const HEAD = async <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.head(route);
    return response.data as T;
  };

  const OPTIONS = async <T>(
    url: string,
    optionalParams?: OptionalParams
  ): Promise<T> => {
    const route = buildUrlWithParams(url, optionalParams);
    const response = await axiosInstance.options(route);
    return response.data as T;
  };

  return {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH,
    HEAD,
    OPTIONS,
  };
};
