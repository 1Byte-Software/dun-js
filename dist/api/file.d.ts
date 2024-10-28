import { DateType, IdType, IFile, IGetListFileParams } from '../models';
export declare const getListFileAPI: (params?: IGetListFileParams) => Promise<IFile[]>;
export declare const resetFileAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deleteFileAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimeFileAPI: (deviceId: IdType) => Promise<DateType | null>;
