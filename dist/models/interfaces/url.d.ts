import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IURL extends IBase {
    deviceId: IdType;
    browserName?: string;
    urlLink?: string;
    urlDate: DateType;
}
export interface IGetListURLParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    browserName?: string;
    urlLink?: string;
    urlDateFrom?: DateType;
    urlDateTo?: DateType;
}
