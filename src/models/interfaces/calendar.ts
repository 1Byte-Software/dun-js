import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

export interface ICalendar extends IBase {
  deviceId: IdType;
  title: string;
  location?: string;
  repetition?: string;
  fromDate: DateType;
  toDate: DateType;
  calendarDate: DateType;
}

export interface IGetListCalendarParams extends IPaginationParams, ISortParams {
  deviceId: IdType;
}
