import { CALL_TYPE } from '../enums';
import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

export interface ICall extends IBase {
  deviceId: IdType;
  contactName: string;
  phone: string;
  phoneNumber: string;
  phoneNumberSIM: string;
  callDate: DateType;
  direction: number;
  duration: number;
}

export interface IGetListCallParams extends IPaginationParams, ISortParams {
  deviceId: IdType;
  contactName?: string;
  direction?: CALL_TYPE;
  phoneNumber?: string;
  callDateFrom?: DateType;
  callDateTo?: DateType;
}
