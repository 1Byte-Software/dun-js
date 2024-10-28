import { DateType, IdType } from '../types';
import { IBase } from './base';
export interface IDeviceDataSync extends IBase {
    /** The id of the device in JFW */
    deviceId: IdType;
    /** Current battery level of the device */
    battery?: number;
    /** Battery status of the device (charging or not) */
    batteryStatus?: boolean;
    /** The last time the device was online */
    lastOnline?: DateType;
    /** WiFi status of the device (enabled or disabled) */
    wifiEnabled?: boolean;
    /** Current connection type of the device (WiFi, 4G, 5G, etc.) */
    connectionType?: string;
    /** The last time the calendar was synchronized */
    lastCalendarDate?: DateType;
    /** The last time the call history was synchronized */
    lastCallHistoryDate?: DateType;
    /** The last time the clipboard was synchronized */
    lastClipboardDate?: DateType;
    /** The last time the contacts were synchronized */
    lastContactDate?: DateType;
    /** The last time the files were synchronized */
    lastFileDate?: DateType;
    /** The last time the GPS data was synchronized */
    lastGpsDate?: DateType;
    /** The last time the keylogger data was synchronized */
    lastKeyloggerDate?: DateType;
    /** The last time the notifications were synchronized */
    lastNotificationDate?: DateType;
    /** The last time the phone call recordings were synchronized */
    lastPhoneCallRecordingDate?: DateType;
    /** The last time the photos were synchronized */
    lastPhotoDate?: DateType;
    /** The last time the SMS messages were synchronized */
    lastSmsDate?: DateType;
    /** The last time the URLs were synchronized */
    lastUrlDate?: DateType;
}
export interface IGetOrCreateDeviceDataSync extends Pick<IDeviceDataSync, 'deviceId'> {
}
export interface ICreateOrUpdateDeviceDataSync extends Exclude<IDeviceDataSync, 'id' | 'createdUserId' | 'createdDate' | 'modifiedUserId' | 'modifiedDate'> {
}
