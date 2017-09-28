export const get = (url: string): Promise<any> => {
  return fetch(url).then((response) => {
    return Promise.resolve(response.text());

  }).then((response: string) => {
      console.log('response: ', response);
      let jsonResponse = JSON.parse(response);
      return jsonResponse;
  });
};