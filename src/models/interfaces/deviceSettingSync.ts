import { IdType } from '../types';
import { IBase } from './base';

export interface IDeviceSettingSync extends IBase {
    deviceId: IdType;
    deviceName: string | null;
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

export interface IGetOrCreateDeviceSettingSync {
    deviceId: IdType;
}

export interface ICreateOrUpdateDeviceSettingSync {
    deviceId: IdType;
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
