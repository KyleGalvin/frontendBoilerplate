import defaultConfig from "./local";
import herokuDevConfig from "./herokuDev";

// declare var process : {
//   env: {
//     NODE_ENV: string
//   }
// }

export interface IConfig {
  "authDomain": string;
  "frontendDomain": string;
  "logLevel": string;
  "port": string;
  "swaggerUrl": string;
}

var envConfig: IConfig;

if (process.env.NODE_ENV === "DEV") {
    envConfig = herokuDevConfig;
} else if (process.env.NODE_ENV === "TEST") {
    envConfig = herokuDevConfig;
} else {
    envConfig = defaultConfig;
}

export const config = envConfig;
