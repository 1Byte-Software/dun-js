import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

export interface IGPS extends IBase {
  deviceId: IdType;
  title: string;
  address?: string;
  repetition?: string;
  longitude: number;
  latitude: number;
  accuracy?: number;
  fromDate: DateType;
  toDate: DateType;
  gpsDate: DateType;
}

export interface IGetListGPSParams extends IPaginationParams, ISortParams {
  deviceId: IdType;
  address?: string;
  gpsDateFrom?: DateType;
  gpsDateTo?: DateType;
}

export interface IGetLastGPSParams {
  deviceId: IdType;
}
