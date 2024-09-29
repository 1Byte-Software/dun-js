import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IPhoneCallRecording extends IBase {
    deviceId: IdType;
    phoneNumber?: string;
    direction?: number;
    contactName?: string;
    audioName?: string;
    audioSize: number;
    duration?: number;
    contentType?: string;
    mediaUrl?: string;
    ex?: string;
    recordedDate: DateType;
}
export interface IGetListPhoneCallRecordingParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
    contactName?: string;
    direction?: number;
    recordedDateFrom?: DateType;
    recordedDateTo?: DateType;
}
