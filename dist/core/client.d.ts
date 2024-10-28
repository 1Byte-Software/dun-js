import { RawAxiosRequestHeaders } from 'axios';
import { DunConfig } from '../models';
export declare class AuthClient {
    constructor(config: DunConfig);
    setAuthKey(authKey: string): void;
    setHeaders(headers: RawAxiosRequestHeaders): void;
}
