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
    console.log("response",response);
    return response.json()
  })    
  .then((response: any) => {
    console.log('response: ', response);
    return response;
  })
  .catch((err) => {
    console.log('error: ', err);
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
    console.log("response",response);
    return response.json()
  })    
  .then((response: any) => {
    console.log('response: ', response);
    return response;
  })
  .catch((err) => {
    console.log('error: ', err);
  });

};