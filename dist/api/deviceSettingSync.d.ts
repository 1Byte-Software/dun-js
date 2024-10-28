import { ICreateOrUpdateDeviceSettingSync, IDeviceSettingSync, IGetOrCreateDeviceSettingSync } from '../models';
export declare const getDeviceSettingSync: (params?: IGetOrCreateDeviceSettingSync) => Promise<IDeviceSettingSync>;
export declare const createOrUpdateDeviceSettingSync: (params?: ICreateOrUpdateDeviceSettingSync) => Promise<ICreateOrUpdateDeviceSettingSync>;
