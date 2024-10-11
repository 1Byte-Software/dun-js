import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the photo data of a device.
 */
export interface IPhoto extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The caption of the photo */
    caption: string;

    /** The file name of the photo */
    fileName?: string;

    /** The URL to access the media file */
    mediaUrl?: string;

    /** The location information associated with the photo */
    locationInfo?: string;

    /** The latitude where the photo was taken */
    latitude?: string;

    /** The longitude where the photo was taken */
    longitude?: string;

    /** The file extension of the photo */
    ext?: string;

    /** The date and time when the photo was captured */
    capturedDate: DateType;
}

/**
 * Interface representing the date filter for photo data.
 */
export interface IPhotoDateFilter {
    /**
     * The start date for filtering photo data.
     * This is the exact time the photo was captured on the device.
     */
    capturedDateFrom?: DateType;

    /**
     * The end date for filtering photo data.
     * This is the exact time the photo was captured on the device.
     */
    capturedDateTo?: DateType;
}

export interface IGetListPhotoParams
    extends IPaginationParams,
        ISortParams,
        IPhotoDateFilter,
        Partial<Pick<IPhoto, 'deviceId' | 'caption'>> {}
