import { DateType, IContact, IdType, IGetListContactParams } from '../models';
import { IListResponse } from '../models/interfaces/common';
export declare const getListContactAPI: (params?: IGetListContactParams) => Promise<IListResponse<IContact>>;
export declare const resetContactAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteContactAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeContactAPI: (deviceId: IdType) => Promise<DateType | null>;
