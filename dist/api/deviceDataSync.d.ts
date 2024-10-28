import { IDeviceDataSync, IGetOrCreateDeviceDataSync } from '../models';
export declare const getOrCreateDeviceDataSync: (params?: IGetOrCreateDeviceDataSync) => Promise<IDeviceDataSync>;
export declare const createOrUpdateDeviceDataSync: (params?: IDeviceDataSync) => Promise<IDeviceDataSync>;
