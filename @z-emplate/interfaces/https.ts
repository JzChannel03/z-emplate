export interface OptionalParams {
  [key: string]: string | number;
}

export interface HttpConfig {
  token?: string;
  baseUrl: string;
}

export interface HttpConfig {
  baseUrl: string;
  token?: string;
}

export type HttpInformation = { default: { config: HttpConfig } } & Record<
  string,
  { config: HttpConfig }
>;

export interface HttpInformationList {
  httpInformationList: HttpInformation;
}
