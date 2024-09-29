import { BehaviorSubject } from 'rxjs';
import { DunConfig } from '../models';
import { RawAxiosRequestHeaders } from 'axios';

class AppService {
  private static _instance: AppService;
  private _appConfig$ = new BehaviorSubject<DunConfig>(null);
  private _authKey$ = new BehaviorSubject<string>('');
  private _userHeaders$ = new BehaviorSubject<RawAxiosRequestHeaders>(null);

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  getConfig$() {
    return this._appConfig$;
  }

  setConfig(config: DunConfig) {
    this._appConfig$.next(config);
  }

  getAuthKey$() {
    return this._authKey$;
  }

  setAuthKey(authKey: string) {
    this._authKey$.next(authKey);
  }

  getUserHeaders$(): BehaviorSubject<RawAxiosRequestHeaders | null> {
    return this._userHeaders$;
  }

  setUserHeaders(headers: RawAxiosRequestHeaders) {
    this._userHeaders$.next(headers);
  }
}

export const _AppService = AppService.Instance;
