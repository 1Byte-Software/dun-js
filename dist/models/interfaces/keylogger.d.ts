import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
/**
 * Interface representing the keylogger data of a device.
 */
export interface IKeylogger extends IBase {
    /** The id of the device */
    deviceId: IdType;
    /** The name of the keylogger entry */
    keyloggerName: string;
    /** The content recorded by the keylogger */
    content?: string;
    /** The date and time when the keylogger data was recorded */
    keyloggerDate: DateType;
}
/**
 * Interface representing the date filter for keylogger data.
 */
export interface IKeyloggerDateFilter {
    /**
     * The start date for filtering keylogger data.
     * This is the exact time the keylogger data was recorded on the device.
     */
    keyloggerDateFrom?: DateType;
    /**
     * The end date for filtering keylogger data.
     * This is the exact time the keylogger data was recorded on the device.
     */
    keyloggerDateTo?: DateType;
}
export interface IGetListKeyloggerParams extends IPaginationParams, ISortParams, IKeyloggerDateFilter, Partial<Pick<IKeylogger, 'deviceId' | 'keyloggerName'>> {
}
