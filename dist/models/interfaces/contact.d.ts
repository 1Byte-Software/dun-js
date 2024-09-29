import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IContact extends IBase {
    deviceId: IdType;
    contactName: string;
    phone: string;
    email?: string;
    organization?: string;
    address?: string;
    contactDate: DateType;
}
export interface IGetListContactParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    phoneNumber?: string;
    contactDateFrom?: DateType;
    contactDateTo?: DateType;
}
