import { HttpInformation } from "@z-emplate/interfaces/https";
class ApiStore {
  private static instance: ApiStore;
  private configList: HttpInformation[] = [
    { config: { baseUrl: "no-base-url//" } },
  ];
  private defaultConfig: HttpInformation = this.configList[0];

  addConfig(apiConfig: HttpInformation) {
    this.configList.push(apiConfig);
  }

  setConfig(apiConfig: HttpInformation | HttpInformation[]) {
    const configToArray = Array.isArray(apiConfig) ? apiConfig : [apiConfig];
    this.configList = configToArray;
  }

  get configByDefault(): HttpInformation {
    return this.defaultConfig;
  }

  setConfigByDefault(index: number) {
    if (index < this.configList.length) {
      this.defaultConfig = this.configList[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  public static getInstance(): ApiStore {
    if (!ApiStore.instance) {
      ApiStore.instance = new ApiStore();
    }
    return ApiStore.instance;
  }

  private constructor() {}
}

export default ApiStore;
