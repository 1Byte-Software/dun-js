import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the notification data of a device.
 */
export interface INotification extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The name of the application that generated the notification */
    appName: string;

    /** The title of the notification */
    notificationTitle?: string;

    /** The content of the notification */
    notificationContent?: string;

    /** The date and time when the notification was recorded */
    notificationDate: DateType;
}

/**
 * Interface representing the date filter for notification data.
 */
export interface INotificationDateFilter {
    /**
     * The start date for filtering notification data.
     * This is the exact time the notification data was recorded on the device.
     */
    notificationDateFrom?: DateType;

    /**
     * The end date for filtering notification data.
     * This is the exact time the notification data was recorded on the device.
     */
    notificationDateTo?: DateType;
}

export interface IGetListNotificationParams
    extends IPaginationParams,
        ISortParams,
        INotificationDateFilter,
        Pick<INotification, 'deviceId' | 'appName'> {}
