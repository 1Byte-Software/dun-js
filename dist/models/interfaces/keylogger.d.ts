import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IKeylogger extends IBase {
    deviceId: IdType;
    keyloggerName: string;
    content?: string;
    keyloggerDate: DateType;
}
export interface IGetListKeyloggerParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    keyloggerName?: string;
    keyloggerDateFrom?: DateType;
    keyloggerDateTo?: DateType;
}
