import { DateType, IdType, IGetListPhoneCallRecordingParams, IPhoneCallRecording } from "@/models";
import { IListResponse } from "@/models/interfaces/common";
export declare const getListPhoneCallRecordingAPI: (params?: IGetListPhoneCallRecordingParams) => Promise<IListResponse<IPhoneCallRecording>>;
export declare const resetPhoneCallRecordingAPI: (deviceId: IdType) => Promise<boolean>;
export declare const deletePhoneCallRecordingAPI: (id: IdType) => Promise<boolean>;
export declare const getLastSyncTimePhoneCallRecordingAPI: (deviceId: IdType) => Promise<DateType | null>;
