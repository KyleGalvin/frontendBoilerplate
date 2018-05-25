import * as path from "path";
import * as redux from "redux";

import * as http from "../utils/http";
import { config } from "../config";

import Logger from "../utils/logger";

const SwaggerUi = require("swagger-ui");
const logger = Logger(path.normalize(path.basename(__filename)));

export const getSpec = async () => {
  try {
    const response = await http.get(config.swaggerUrl);

    logger.info({"obj": response}, "swagger data: ");
    if (!response) {
      throw Error("No response returned from server");
    }
    SwaggerUi({
      "dom_id": "#swaggerContainer",
      "spec": response,
      "presets": [SwaggerUi.presets.apis],
    });

  } catch (err) {
    logger.error("Error getting data: ", err);
  }
};

export const getGraphQL = async (graphQLParams: any) => {
  logger.info("fetcher called");
  try {
    const response = await http.post(config.graphqlUrl, graphQLParams);
    logger.info({"obj": response}, "graphql data: ");
    if (!response) {
      throw Error("No response returned from server");
    }
    return response;
  } catch (err) {
    logger.error("Error getting data: ", err);
  }
};
