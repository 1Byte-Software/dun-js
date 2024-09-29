import { axiosInstanceDun } from "@/config/axios/axiosClient";
import { DateType, IClipboard, IdType, IGetListClipboardParams } from "@/models";
import { IListResponse } from "@/models/interfaces/common";

const REST = 'clipboards';

const resetPath = `${REST}/reset`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListClipboardAPI = async (
    params?: IGetListClipboardParams
): Promise<IListResponse<IClipboard>> => {
    const clipboard = `${REST}`;

    const response = await axiosInstanceDun.get(clipboard, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const resetClipboardAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(resetPath, {
        deviceId,
    });

    const isSuccess = response.data;

    return isSuccess;
};

export const deleteClipboardAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeClipboardAPI = async (
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
