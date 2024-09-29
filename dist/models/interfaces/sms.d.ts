import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface ISMS extends IBase {
    deviceId: IdType;
    contactName: string;
    textMessage: string;
    phoneNumber: string;
    phoneNumberSim?: string;
    direction: number;
    smsDate: DateType;
}
export interface IGetListSMSParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    contactName?: string;
    direction?: number;
    smsDateFrom?: DateType;
    smsDateTo?: DateType;
}
