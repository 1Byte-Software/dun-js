import { DateType, IdType, IGetLastGPSParams, IGetListGPSParams, IGPS } from '../models';
import { IListResponse } from '../models/interfaces/common';
export declare const getListGPSAPI: (params?: IGetListGPSParams) => Promise<IListResponse<IGPS>>;
export declare const resetGPSAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteGPSAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeGPSAPI: (deviceId: IdType) => Promise<DateType | null>;
export declare const getLastGPSAPI: (params?: IGetLastGPSParams) => Promise<IGPS | null>;
