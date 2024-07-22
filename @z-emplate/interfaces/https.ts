export interface OptionalParams {
  [key: string]: string | number;
}

export interface HttpConfig {
  token?: string;
  baseUrl: string;
}

export interface HttpInformation {
  config: HttpConfig;
}

export interface HttpInformationList {
  httpInformationList: HttpInformation[];
}
