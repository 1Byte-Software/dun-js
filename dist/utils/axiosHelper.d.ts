import { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
export declare const get: (url: string, configArg?: AxiosRequestConfig, userHeaders?: RawAxiosRequestHeaders) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const post: (url: string, payload?: any, configArg?: AxiosRequestConfig, userHeaders?: RawAxiosRequestHeaders) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const put: (url: string, payload?: any, configArg?: AxiosRequestConfig, userHeaders?: RawAxiosRequestHeaders) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const patch: (url: string, payload?: any, configArg?: AxiosRequestConfig, userHeaders?: RawAxiosRequestHeaders) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const remove: (url: string, userHeaders?: RawAxiosRequestHeaders) => Promise<import("axios").AxiosResponse<any, any>>;
