import { IDevice } from 'jfw-js';
import { IdType } from '../types';
import { IDeviceDataSync } from './deviceDataSync';
import { IDeviceSettingSync } from './deviceSettingSync';
import { IPaginationParams, ISortParams } from './filter';
import { DEVICE_OS, DEVICE_ROLE, DEVICE_STATUS, DEVICE_TYPE } from '../enums';
export interface IAggregateDevice {
    device: IDevice;
    deviceDataSync: IDeviceDataSync;
    deviceSettingSync: IDeviceSettingSync;
}
export interface IGetListAggregateDevicesParams extends IPaginationParams, ISortParams {
    userId: IdType;
    deviceName?: string;
    deviceType?: DEVICE_TYPE;
    osDevice?: DEVICE_OS;
    tags?: string;
    status?: DEVICE_STATUS;
}
export interface IDeleteDeviceParams {
    id: IdType;
}
export interface IEditDeviceParams {
    id: IdType;
}
export interface IEditDevicePayload {
    deviceName?: string;
    isDefault?: boolean;
    phoneNumber?: string;
    simCardInfo?: string;
    status?: DEVICE_STATUS;
    tags?: string;
}
export interface IDeviceTags {
    main?: boolean;
    sub?: boolean;
    referralCode?: string;
    deviceRole?: DEVICE_ROLE;
}
