import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the calendar data of a device.
 */
export interface ICalendar extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The title or name of the calendar entry */
    title: string;

    /** The location associated with the calendar entry */
    location?: string;

    /** The repetition pattern of the calendar entry */
    repetition?: string;

    /** The start date and time for the calendar entry */
    fromDate: DateType;

    /** The end date and time for the calendar entry */
    toDate: DateType;

    /** The date and time when the calendar data was recorded */
    calendarDate: DateType;
}

/**
 * Interface representing the date filter for calendar data.
 */
export interface ICalendarDateFilter {
    /**
     * The start date for filtering calendar data.
     * This is the exact time the calendar data was recorded on the device.
     */
    calendarDateFrom?: DateType;

    /**
     * The end date for filtering calendar data.
     * This is the exact time the calendar data was recorded on the device.
     */
    calendarDateTo?: DateType;
}

export interface IGetListCalendarParams
    extends IPaginationParams,
        ISortParams,
        ICalendarDateFilter,
        Pick<ICalendar, 'deviceId' | 'location'> {}
