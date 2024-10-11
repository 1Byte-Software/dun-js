import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

/**
 * Interface representing the file data of a device.
 */
export interface IFile extends IBase {
    /** The id of the device */
    deviceId: IdType;

    /** The name of the file */
    fileName?: string;

    /** The size of the file */
    fileSize: number;

    /** The URL to access the file */
    fileUrl?: string;

    /** The file extension */
    ext?: string;

    /** The date and time when the file was recorded */
    fileDate: DateType;
}

/**
 * Interface representing the date filter for file data.
 */
export interface IFileDateFilter {
    /**
     * The start date for filtering file data.
     * This is the exact time the file data was recorded on the device.
     */
    fileDateFrom?: DateType;

    /**
     * The end date for filtering file data.
     * This is the exact time the file data was recorded on the device.
     */
    fileDateTo?: DateType;
}

export interface IGetListFileParams extends IPaginationParams, ISortParams, IFileDateFilter, Pick<IFile, 'deviceId'> {}
