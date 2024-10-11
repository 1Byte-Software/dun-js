import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the URL data of a device.
 */
export interface IURL extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The name of the browser */
    browserName?: string;

    /** The URL link */
    urlLink?: string;

    /** The date and time when the URL was recorded */
    urlDate: DateType;
}

/**
 * Interface representing the date filter for URL data.
 */
export interface IURLDateFilter {
    /**
     * The start date for filtering URL data.
     * This is the exact time the URL data was recorded on the device.
     */
    urlDateFrom?: DateType;

    /**
     * The end date for filtering URL data.
     * This is the exact time the URL data was recorded on the device.
     */
    urlDateTo?: DateType;
}

export interface IGetListURLParams
    extends IPaginationParams,
        ISortParams,
        IURLDateFilter,
        Partial<Pick<IURL, 'deviceId' | 'browserName' | 'urlLink'>> {}
