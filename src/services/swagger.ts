import * as path from "path";
import * as redux from "redux";

import * as http from "../utils/http";
import { config } from "../config";


import Logger from "../utils/logger";

var SwaggerUi = require('swagger-ui');
const logger = Logger(path.normalize(path.basename(__filename)));

export const getSpec = async () => {
  try {
    let response = await http.get(config.swaggerUrl);

    logger.info({obj: response}, "swagger data: ");
    if(!response){
      throw Error("No response returned from server");
    }
    SwaggerUi({
      dom_id: "#swaggerContainer",
      spec: response,
      presets: [SwaggerUi.presets.apis],
    });

  } catch (err) {
    logger.error("Error getting data: ", err);
  }
}