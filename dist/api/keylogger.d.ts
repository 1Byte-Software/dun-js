import { DateType, IdType, IGetListKeyloggerParams, IKeylogger } from "@/models";
import { IListResponse } from "@/models/interfaces/common";
export declare const getListKeyloggerAPI: (params?: IGetListKeyloggerParams) => Promise<IListResponse<IKeylogger>>;
export declare const resetKeyloggerAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteKeyloggerAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeKeyloggerAPI: (deviceId: IdType) => Promise<DateType | null>;
