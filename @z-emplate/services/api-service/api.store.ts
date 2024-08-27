/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInformation, HttpConfig } from "@z-emplate/interfaces/https";
import useErrorListStore from "@z-emplate/stores/error-handler.store";

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
    const { addError } = useErrorListStore.getState();
    const id = name.toString();

    if (name in this.configList) {
      return this.configList[name].config;
    } else {
      // Usar setTimeout para evitar la actualización durante el renderizado
      setTimeout(() => {
        addError({
          title: "Invalid config name",
          message: `The config name '${name.toString()}' is invalid, please check the name of the config passed to the useApiService, or check the naming in your ApiServiceProvider, and try again. If you are using the default config, please check the naming in your ApiServiceProvider.`,
          errorThrow: new Error("Invalid config name"),
          alertType: "fatal",
          id,
        });
      }, 0);

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
