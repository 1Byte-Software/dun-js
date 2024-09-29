import { DateType, IdType, IGetListNotificationParams, INotification } from "@/models";
import { IListResponse } from "@/models/interfaces/common";
export declare const getListNotificationAPI: (params?: IGetListNotificationParams) => Promise<IListResponse<INotification>>;
export declare const resetNotificationAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteNotificationAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeNotificationAPI: (deviceId: IdType) => Promise<DateType | null>;
