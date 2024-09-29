import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

export interface IDeviceDataSync extends IBase {
    deviceId: IdType;
    battery?: number;
    batteryStatus?: boolean;
    lastOnline?: DateType;
    wifiEnabled?: boolean;
    connectionType?: string;
    lastCalendarDate?: DateType;
    lastCallHistoryDate?: DateType;
    lastClipboardDate?: DateType;
    lastContactDate?: DateType;
    lastFileDate?: DateType;
    lastGPSDate?: DateType;
    lastKeyloggerDate?: DateType;
    lastNotificationDate?: DateType;
    lastPhoneCallRecordingDate?: DateType;
    lastPhotoDate?: DateType;
    lastSMSDate?: DateType;
    lastURLDate?: DateType;
}

export interface IGetOrCreateDeviceDataSync {
    deviceId: IdType;
}

export interface ICreateOrUpdateDeviceDataSync {
    deviceId: IdType;
    battery?: number;
    batteryStatus?: boolean;
    lastOnline?: DateType;
    wifiEnabled?: boolean;
    connectionType?: string;
    lastCalendarDate?: DateType;
    lastCallHistoryDate?: DateType;
    lastClipboardDate?: DateType;
    lastContactDate?: DateType;
    lastFileDate?: DateType;
    lastGPSDate?: DateType;
    lastKeyloggerDate?: DateType;
    lastNotificationDate?: DateType;
    lastPhoneCallRecordingDate?: DateType;
    lastPhotoDate?: DateType;
    lastSMSDate?: DateType;
    lastURLDate?: DateType;
}
