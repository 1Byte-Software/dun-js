import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the GPS data of a device.
 */
export interface IGPS extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The title or name of the GPS entry */
    title: string;

    /** The address associated with the GPS coordinates */
    address?: string;

    /** The repetition pattern of the GPS entry */
    repetition?: string;

    /** The longitude coordinate */
    longitude: number;

    /** The latitude coordinate */
    latitude: number;

    /** The accuracy of the GPS coordinates */
    accuracy?: number;

    /** The start date and time for the GPS entry */
    fromDate: DateType;

    /** The end date and time for the GPS entry */
    toDate: DateType;

    /** The date and time when the GPS data was recorded */
    gpsDate: DateType;
}

/**
 * Interface representing the date filter for GPS data.
 */
export interface IGPSDateFilter {
    /**
     * The start date for filtering GPS data.
     * This is the exact time the GPS data was recorded on the device.
     */
    gpsDateFrom?: DateType;

    /**
     * The end date for filtering GPS data.
     * This is the exact time the GPS data was recorded on the device.
     */
    gpsDateTo?: DateType;
}

export interface IGetListGPSParams
    extends IPaginationParams,
        ISortParams,
        IGPSDateFilter,
        Pick<IGPS, 'deviceId' | 'address'> {}

export interface IGetLastGPSParams extends Partial<Pick<IGPS, 'deviceId'>> {}
