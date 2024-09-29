import { DateType, IClipboard, IdType, IGetListClipboardParams } from "@/models";
import { IListResponse } from "@/models/interfaces/common";
export declare const getListClipboardAPI: (params?: IGetListClipboardParams) => Promise<IListResponse<IClipboard>>;
export declare const resetClipboardAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteClipboardAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeClipboardAPI: (deviceId: IdType) => Promise<DateType | null>;
