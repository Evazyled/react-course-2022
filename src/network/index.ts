import axios, { AxiosRequestConfig } from 'axios';

const makeRequest = async ({ url, method = 'GET', data = {}, params = {} }: AxiosRequestConfig) => {
  try {
    const respone = await axios({
      method,
      url,
      data,
      params,
      baseURL: 'https://rickandmortyapi.com/api',
      timeout: 10000,
    });
    return respone.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default makeRequest;
