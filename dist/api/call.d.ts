import { DateType, ICall, IdType, IGetListCallParams } from "@/models";
import { IListResponse } from "@/models/interfaces/common";
export declare const getListCallAPI: (params?: IGetListCallParams) => Promise<IListResponse<ICall>>;
export declare const resetCallAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteCallAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeCallAPI: (deviceId: IdType) => Promise<DateType | null>;
