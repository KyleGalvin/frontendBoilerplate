import defaultConfig from "./local";
import herokuDevConfig from "./herokuDev";

export interface IConfig {
  "authDomain": string;
  "frontendDomain": string;
  "logLevel": string;
  "port": string;
  "swaggerUrl": string;
}

var envConfig: IConfig;

envConfig = defaultConfig;

if(process && process.env && process.env.NODE_ENV) {
    const env = (process.env.NODE_ENV as string).trim();
    if (env === "DEV") {
        envConfig = herokuDevConfig;
    }
}

export const config = envConfig;
