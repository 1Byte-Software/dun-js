import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the SMS data of a device.
 */
export interface ISMS extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The name of the contact */
    contactName: string;

    /** The text message content */
    textMessage: string;

    /** The phone number of the contact */
    phoneNumber: string;

    /** The SIM card phone number used for the SMS */
    phoneNumberSim?: string;

    /** The direction of the SMS (incoming or outgoing) */
    direction: number;

    /** The date and time when the SMS was recorded */
    smsDate: DateType;
}

/**
 * Interface representing the date filter for SMS data.
 */
export interface ISMSDateFilter {
    /**
     * The start date for filtering SMS data.
     * This is the exact time the SMS data was recorded on the device.
     */
    smsDateFrom?: DateType;

    /**
     * The end date for filtering SMS data.
     * This is the exact time the SMS data was recorded on the device.
     */
    smsDateTo?: DateType;
}

export interface IGetListSMSParams
    extends IPaginationParams,
        ISortParams,
        ISMSDateFilter,
        Pick<ISMS, 'deviceId' | 'contactName' | 'direction'> {}