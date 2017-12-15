import defaultConfig from "./local";

export interface IConfig {
    "testDataRoot": string;
    "serverURI": string;
    "logLevel": string;
  }

export const config = (defaultConfig as IConfig);