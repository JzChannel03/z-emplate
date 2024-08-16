import { HttpInformation } from "@z-emplate/interfaces/https";
class ApiStore {
  private static instance: ApiStore;
  private configList: HttpInformation[] = [
    { config: { baseUrl: "no-base-url//" } },
  ];

  //TEST this method in execution
  addConfig(apiConfig: HttpInformation) {
    this.configList.push(apiConfig);
  }

  /* test(index: keyof T): number {
    return 0;
  } */

  setConfig(apiConfig: HttpInformation | HttpInformation[]) {
    const configToArray = Array.isArray(apiConfig) ? apiConfig : [apiConfig];
    this.configList = configToArray;
  }

  get firstConfig(): HttpInformation {
    return this.configList[0];
  }

  get lastConfig(): HttpInformation {
    return this.configList[this.configList.length - 1];
  }

  getConfigByIndex(index: number): HttpInformation {
    if (index < this.configList.length) {
      return this.configList[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  /* public static createInstance(): ApiStore {
    if (!ApiStore.instance) {
      ApiStore.instance = new ApiStore();
    }
    return ApiStore.instance;
  }

  public static getInstance(): ApiStore {
    return ApiStore.instance;
  } */

  public static getInstance(): ApiStore {
    if (!ApiStore.instance) {
      ApiStore.instance = new ApiStore();
    }
    return ApiStore.instance;
  }

  private constructor() {}
}

export default ApiStore;
