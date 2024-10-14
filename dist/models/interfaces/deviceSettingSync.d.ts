import { IdType } from '../types';
import { IBase } from './base';
export interface IDeviceSettingSync extends IBase {
    deviceId: IdType;
    aliasName: string | null;
    runMode: number;
    calendar: number;
    callHistory: number;
    clipboard: number;
    contact: number;
    file: number;
    gps: number;
    keylogger: number;
    notification: number;
    phoneCallRecording: number;
    photo: number;
    sms: number;
    url: number;
    ambientRecord: number;
    distanceFilter: number;
    gpsInterval: number;
    saveBattery: number;
}
export interface IGetOrCreateDeviceSettingSync extends Pick<IDeviceSettingSync, 'deviceId'> {
}
export interface ICreateOrUpdateDeviceSettingSync extends Exclude<IDeviceSettingSync, 'id' | 'createdUserId' | 'createdDate' | 'modifiedUserId' | 'modifiedDate'> {
}
