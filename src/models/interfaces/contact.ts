import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the contact data of a device.
 */
export interface IContact extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The name of the contact */
    contactName: string;

    /** The phone number of the contact */
    phone: string;

    /** The email of the contact */
    email?: string;

    /** The organization associated with the contact */
    organization?: string;

    /** The address of the contact */
    address?: string;

    /** The date and time when the contact data was recorded */
    contactDate: DateType;
}

/**
 * Interface representing the date filter for contact data.
 */
export interface IContactDateFilter {
    /**
     * The start date for filtering contact data.
     * This is the exact time the contact data was recorded on the device.
     */
    contactDateFrom?: DateType;

    /**
     * The end date for filtering contact data.
     * This is the exact time the contact data was recorded on the device.
     */
    contactDateTo?: DateType;
}

export interface IGetListContactParams
    extends IPaginationParams,
        ISortParams,
        IContactDateFilter,
        Pick<IContact, 'deviceId' | 'phone'> {}
