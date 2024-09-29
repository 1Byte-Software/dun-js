import { DateType, IdType, IGetListURLParams, IURL } from "@/models";
import { IListResponse } from "@/models/interfaces/common";
export declare const getListURLAPI: (params?: IGetListURLParams) => Promise<IListResponse<IURL>>;
export declare const resetURLAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteURLAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeURLAPI: (deviceId: IdType) => Promise<DateType | null>;
