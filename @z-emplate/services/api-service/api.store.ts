/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInformation, HttpConfig } from "@z-emplate/interfaces/https";

class ApiStore<T extends HttpInformation> {
  private static instance: ApiStore<any>;
  private configList: T;

  constructor(config: T) {
    this.configList = config;
  }

  setConfig(apiConfig: T) {
    this.configList = { ...apiConfig };
  }

  get defaultConfig(): HttpConfig {
    return this.configList.default.config;
  }

  getConfigByName<K extends keyof T>(name: K): HttpConfig {
    if (name in this.configList) {
      return this.configList[name].config;
    } else {
      // TODO: Apply the error store to the api store
      /* errorStore.addError({
        error: {
          title: "Invalid config name",
          message:
            "The config name is invalid, please check the name of the config and try again",
          errorThrow: new Error("Invalid config name"),
          alertType: "fatal",
        },
      }); */
      throw new Error("Invalid config name");
    }
  }

  public static createInstance<U extends HttpInformation>(
    config: U
  ): ApiStore<U> {
    if (!ApiStore.instance) {
      ApiStore.instance = new ApiStore<U>(config);
    }
    return ApiStore.instance;
  }

  public static getInstance(): ApiStore<any> {
    return ApiStore.instance;
  }
}

export default ApiStore;
