import { axiosInstanceDun } from "@/config/axios/axiosClient";
import { DateType, IdType, IGetListSMSParams, ISMS } from "@/models";
import { IListResponse } from "@/models/interfaces/common";

const REST = 'SMS';

const resetPath = `${REST}/reset`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListSMSAPI = async (params?: IGetListSMSParams): Promise<IListResponse<ISMS>> => {
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

export const resetSMSAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(resetPath, {
        deviceId,
    });

    const isSuccess = response.data;

    return isSuccess;
};

export const deleteSMSAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeSMSAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
