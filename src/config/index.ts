import defaultConfig from "./local";

export interface IConfig {
  "testDataRoot": string;
  "authDomain": string;
  "logLevel": string;
}

if (process.env.NODE_ENV === "DEV") {
  defaultConfig.authDomain = process.env.AUTH_DOMAIN as string;
}
console.log('config auth domain ' +  defaultConfig.authDomain );

export const config = (defaultConfig as IConfig);