import { DateType, IdType, IGetListSMSParams, ISMS } from '../models';
import { IListResponse } from '../models/interfaces/common';
export declare const getListSMSAPI: (params?: IGetListSMSParams) => Promise<IListResponse<ISMS>>;
export declare const resetSMSAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteSMSAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeSMSAPI: (deviceId: IdType) => Promise<DateType | null>;
