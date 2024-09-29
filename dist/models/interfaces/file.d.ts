import { DateType, IdType } from '../types';
import { IBase } from './base';
import { IPaginationParams, ISortParams } from './filter';
export interface IFile extends IBase {
    deviceId: IdType;
    fileName?: string;
    fileSize: number;
    fileUrl?: string;
    ext?: string;
    fileDate: DateType;
}
export interface IGetListFileParams extends IPaginationParams, ISortParams {
    deviceId: IdType;
}
