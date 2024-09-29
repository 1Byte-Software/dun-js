import { DateType, IdType, IGetListPhotoParams, IPhoto } from "@/models";
export declare const getListPhotoAPI: (params?: IGetListPhotoParams) => Promise<IPhoto[]>;
export declare const resetPhotoAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deletePhotoAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimePhotoAPI: (deviceId: IdType) => Promise<DateType | null>;
