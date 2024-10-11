import { CALL_TYPE } from '../enums';
import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the call data of a device.
 */
export interface ICall extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The name of the contact */
    contactName: string;

    /** The phone number of the contact */
    phone: string;

    /** The phone number used for the call */
    phoneNumber: string;

    /** The SIM card phone number used for the call */
    phoneNumberSIM: string;

    /** The date and time when the call was made */
    callDate: DateType;

    /** The direction of the call (incoming or outgoing) */
    direction: number;

    /** The duration of the call in seconds */
    duration: number;
}

/**
 * Interface representing the date filter for call data.
 */
export interface ICallDateFilter {
    /**
     * The start date for filtering call data.
     * This is the exact time the call data was recorded on the device.
     */
    callDateFrom?: DateType;

    /**
     * The end date for filtering call data.
     * This is the exact time the call data was recorded on the device.
     */
    callDateTo?: DateType;
}

export interface IGetListCallParams
    extends IPaginationParams,
        ISortParams,
        ICallDateFilter,
        Partial<Pick<ICall, 'deviceId' | 'contactName' | 'direction' | 'phoneNumber'>> {}
