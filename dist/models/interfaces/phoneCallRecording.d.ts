import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
/**
 * Interface representing the phone call recording data of a device.
 */
export interface IPhoneCallRecording extends IBase {
    /** The id of the device */
    deviceId: IdType;
    /** The phone number involved in the call */
    phoneNumber?: string;
    /** The direction of the call (incoming or outgoing) */
    direction?: number;
    /** The name of the contact */
    contactName?: string;
    /** The name of the audio file */
    audioName?: string;
    /** The size of the audio file */
    audioSize: number;
    /** The duration of the call in seconds */
    duration?: number;
    /** The content type of the audio file */
    contentType?: string;
    /** The URL to access the media file */
    mediaUrl?: string;
    /** Any additional information */
    ex?: string;
    /** The date and time when the call was recorded */
    recordedDate: DateType;
}
/**
 * Interface representing the date filter for phone call recording data.
 */
export interface IPhoneCallRecordingDateFilter {
    /**
     * The start date for filtering phone call recording data.
     * This is the exact time the phone call recording data was recorded on the device.
     */
    recordedDateFrom?: DateType;
    /**
     * The end date for filtering phone call recording data.
     * This is the exact time the phone call recording data was recorded on the device.
     */
    recordedDateTo?: DateType;
}
export interface IGetListPhoneCallRecordingParams extends IPaginationParams, ISortParams, IPhoneCallRecordingDateFilter, Partial<Pick<IPhoneCallRecording, 'deviceId' | 'contactName' | 'direction'>> {
}
