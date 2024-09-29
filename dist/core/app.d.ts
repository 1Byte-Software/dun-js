import { BehaviorSubject } from 'rxjs';
import { DunConfig } from '../models';
import { RawAxiosRequestHeaders } from 'axios';
declare class AppService {
    private static _instance;
    private _appConfig$;
    private _authKey$;
    private _userHeaders$;
    static get Instance(): AppService;
    getConfig$(): BehaviorSubject<DunConfig>;
    setConfig(config: DunConfig): void;
    getAuthKey$(): BehaviorSubject<string>;
    setAuthKey(authKey: string): void;
    getUserHeaders$(): BehaviorSubject<RawAxiosRequestHeaders | null>;
    setUserHeaders(headers: RawAxiosRequestHeaders): void;
}
export declare const _AppService: AppService;
export {};
