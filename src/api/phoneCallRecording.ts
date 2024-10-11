import { axiosInstanceDun } from '../config/axios/axiosClient';
import { DateType, IdType, IGetListPhoneCallRecordingParams, IPhoneCallRecording } from '../models';
import { IListResponse } from '../models/interfaces/common';
import { formatStringByObj } from '../utils/string';

const REST = 'phone-call-recordings';

const resetPath = `${REST}/reset/{deviceId}`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListPhoneCallRecordingAPI = async (
    params?: IGetListPhoneCallRecordingParams,
): Promise<IListResponse<IPhoneCallRecording>> => {
    const url = `${REST}`;

    const response = await axiosInstanceDun.get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const resetPhoneCallRecordingAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(
        formatStringByObj(resetPath, {
            deviceId,
        }),
    );

    const isSuccess = response.data;

    return isSuccess;
};

export const deletePhoneCallRecordingAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimePhoneCallRecordingAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
