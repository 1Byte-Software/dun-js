import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IPhoto extends IBase {
    deviceId: IdType;
    caption: string;
    fileName?: string;
    mediaUrl?: string;
    locationInfo?: string;
    latitude?: string;
    longitude?: string;
    ext?: string;
    capturedDate: DateType;
}
export interface IGetListPhotoParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    caption?: string;
    capturedDateFrom?: DateType;
    capturedDateTo?: DateType;
}
