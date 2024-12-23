import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import { _AppService } from '../../core/app';
import { API_DOMAIN, MODE_VALUES } from '../../models';

let axiosInstanceDun: ReturnType<typeof axiosInstance>;
let brandUrl = '';
let authKey = '';
let userHeaders: RawAxiosRequestHeaders = {};

// Get config, then set values to baseUrl and brandUrl
const config$ = _AppService.getConfig$();

config$.subscribe((config) => {
  if (config) {
    const baseUrl = API_DOMAIN[config.mode];

    brandUrl = config.brandUrl;

    axiosInstanceDun = axiosInstance(baseUrl);
  }
});

// Get authKey, then set value to authKey
const authKey$ = _AppService.getAuthKey$();

authKey$.subscribe((key) => {
  authKey = key;
});

// Get userHeaders, then set value to userHeaders
const userHeaders$ = _AppService.getUserHeaders$();

userHeaders$.subscribe((headers) => {
  userHeaders = headers;
});

// Create axios instance
const axiosInstance = (baseUrl: string) => {
  const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
      'content-type': 'application/json',
    },
  });
  axiosClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      config.headers['BrandUrl'] = brandUrl;
      if (authKey) {
        config.headers['AuthKey'] = authKey;
      }

      for (const header in userHeaders) {
        config.headers[header] = userHeaders[header];
      }

      return config;
    },
  );
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response && response.data) {
        return response.data;
      }
      if (typeof response.data === 'boolean') {
        return response.data;
      }
      return response;
    },
    (error) => {
      // Handle errors
      throw error;
    },
  );

  return axiosClient;
};

export { axiosInstanceDun };
