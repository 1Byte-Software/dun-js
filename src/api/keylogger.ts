import { axiosInstanceDun } from "@/config/axios/axiosClient";
import { DateType, IdType, IGetListKeyloggerParams, IKeylogger } from "@/models";
import { IListResponse } from "@/models/interfaces/common";

const REST = 'keyloggers';

const resetPath = `${REST}/reset`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListKeyloggerAPI = async (
    params?: IGetListKeyloggerParams
): Promise<IListResponse<IKeylogger>> => {
    const keylogger = `${REST}`;

    const response = await axiosInstanceDun.get(keylogger, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const resetKeyloggerAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(resetPath, {
        deviceId,
    });

    const isSuccess = response.data;

    return isSuccess;
};

export const deleteKeyloggerAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeKeyloggerAPI = async (
    deviceId: IdType
): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
