import * as path from "path";

import Logger from "../utils/logger";

const logger = Logger(path.normalize(path.basename(__filename)));

export const get = (url: string): Promise<any> => {

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");

  var cache = "default" as "default" | "no-store" | "reload" | "no-cache" | "force-cache" | undefined;
  var mode = "cors" as "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
  var requestConfig = { 
    method: 'GET',
    headers: myHeaders,
    mode: mode,
    cache: cache 
  };

  var request = new Request(url, requestConfig);

  return fetch(request).then((response) => {
    logger.info("response",response);
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json()
  })    
  .then((response: any) => {
    logger.info('response: ', response);
    return response;
  })
  .catch((err: any) => {
    logger.info('fetch error: ', err);
    return null;
  });

};

export const post = (url: string, body: any): Promise<any> => {

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");

  var cache = "default" as "default" | "no-store" | "reload" | "no-cache" | "force-cache" | undefined;
  var mode = "cors" as "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
  var requestConfig = { 
    method: 'POST',
    headers: myHeaders,
    mode: mode,
    cache: cache,
    body: body 
  };

  var request = new Request(url, requestConfig);

  return fetch(request).then((response) => {
    logger.info("response",response);
    return response.json()
  })    
  .then((response: any) => {
    logger.info('response: ', response);
    return response;
  })
  .catch((err: any) => {
    logger.info('error: ', err);
  });

};