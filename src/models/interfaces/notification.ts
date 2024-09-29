import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';

export interface INotification extends IBase {
    deviceId: IdType;
    appName: string;
    notificationTitle?: string;
    notificationContent?: string;
    notificationDate: DateType;
}

export interface IGetListNotificationParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    appName?: string;
    notificationDateFrom?: DateType;
    notificationDateTo?: DateType;
}
