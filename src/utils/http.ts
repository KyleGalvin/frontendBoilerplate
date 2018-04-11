import * as path from "path";

import Logger from "../utils/logger";
import { config } from "../config";
import { store } from "../stores/store";

const logger = Logger(path.normalize(path.basename(__filename)));

export const get = (url: string): Promise<any> => {

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", config.authDomain);

  const auth = store.getState().auth;
  if ( auth !== null) {
    myHeaders.append("Authorization", "Bearer " + auth);
  }

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

export const del = (url: string): Promise<any> => {

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", config.authDomain);

  const auth = store.getState().auth;
  if ( auth !== null) {
    myHeaders.append("Authorization", "Bearer " + auth);
  }

  var cache = "default" as "default" | "no-store" | "reload" | "no-cache" | "force-cache" | undefined;
  var mode = "cors" as "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
  var requestConfig = { 
    method: 'DELETE',
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

export const post = (url: string, data: any): Promise<any> => {
  logger.info({obj: data},'posting body');
  const body = new FormData();
  //Object.keys(data).map((value: string, index: number)=>{body.append(value, data[value])});
  body.append( "json", JSON.stringify( data ) );
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", config.authDomain);
  myHeaders.append("Content-Type", "application/json");

  const auth = store.getState().auth;
  if ( auth !== null) {
    myHeaders.append("Authorization", "Bearer " + auth);
  }

  var cache = "default" as "default" | "no-store" | "reload" | "no-cache" | "force-cache" | undefined;
  var mode = "cors" as "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
  var requestConfig = { 
    method: 'POST',
    headers: myHeaders,
    mode: mode,
    cache: cache,
    body: JSON.stringify(data)
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

export const put = (url: string, data: any): Promise<any> => {
  logger.info({obj: data},'put body');
  const body = new FormData();
  //Object.keys(data).map((value: string, index: number)=>{body.append(value, data[value])});
  body.append( "json", JSON.stringify( data ) );
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", config.authDomain);
  myHeaders.append("Content-Type", "application/json");

  const auth = store.getState().auth;
  if ( auth !== null) {
    myHeaders.append("Authorization", "Bearer " + auth);
  }

  var cache = "default" as "default" | "no-store" | "reload" | "no-cache" | "force-cache" | undefined;
  var mode = "cors" as "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
  var requestConfig = { 
    method: 'PUT',
    headers: myHeaders,
    mode: mode,
    cache: cache,
    body: JSON.stringify(data)
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