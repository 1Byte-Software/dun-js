import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IClipboard extends IBase {
    deviceId: IdType;
    clipboardContent: string;
    fromApp: string;
    clipboardDate: DateType;
}
export interface IGetListClipboardParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    fromApp?: string;
    clipboardDateFrom?: DateType;
    clipboardDateTo?: DateType;
}
