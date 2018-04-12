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
console.log("processEnv: ", process.env);
if(process && process.env && process.env.NODE_ENV) {
    const env = (process.env.NODE_ENV as string).trim();
    if (env === "DEV") {
        envConfig = herokuDevConfig;
    } else if (env === "TEST") {
        envConfig = herokuDevConfig;
    } else {
        envConfig = defaultConfig;
    }
}

export const config = envConfig;
