import { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { axiosInstanceDun } from '../config/axios/axiosClient';

export const get = (
  url: string,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceDun.get(url, config);
};

export const post = (
  url: string,
  payload?: any,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceDun.post(url, payload, config);
};

export const put = (
  url: string,
  payload?: any,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceDun.put(url, payload, config);
};

export const patch = (
  url: string,
  payload?: any,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceDun.patch(url, payload, config);
};

export const remove = (url: string, userHeaders?: RawAxiosRequestHeaders) => {
  const config = {
    headers: userHeaders,
  };

  return axiosInstanceDun.delete(url, config);
};
