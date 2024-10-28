import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
/**
 * Interface representing the clipboard data of a device.
 */
export interface IClipboard extends IBase {
    /** The id of the device */
    deviceId: IdType;
    /** The content of the clipboard */
    clipboardContent: string;
    /** The application from which the clipboard content was copied */
    fromApp: string;
    /** The date and time when the clipboard data was recorded */
    clipboardDate: DateType;
}
/**
 * Interface representing the date filter for clipboard data.
 */
export interface IClipboardDateFilter {
    /**
     * The start date for filtering clipboard data.
     * This is the exact time the clipboard data was recorded on the device.
     */
    clipboardDateFrom?: DateType;
    /**
     * The end date for filtering clipboard data.
     * This is the exact time the clipboard data was recorded on the device.
     */
    clipboardDateTo?: DateType;
}
export interface IGetListClipboardParams extends IPaginationParams, ISortParams, IClipboardDateFilter, Partial<Pick<IClipboard, 'deviceId' | 'fromApp'>> {
}
