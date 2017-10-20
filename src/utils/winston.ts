import * as Winston from "winston";
import Config from "../config/confManager";

var logger = new Winston.Logger({
  transports: [
    // some other loggings
    new Winston.transports.Console({
      name: 'debug-console',
      level: Config.logLevel,
      prettyPrint: true,
      handleExceptions: true,
      json: false,
      colorize: true
    })

  ],
  exitOnError: false // don't crush no error
});

export default logger;