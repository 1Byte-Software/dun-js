import { axiosInstanceDun } from "@/config/axios/axiosClient";
import { DateType, IdType, IGetLastGPSParams, IGetListGPSParams, IGPS } from "@/models";
import { IListResponse } from "@/models/interfaces/common";

const REST = 'gps';

const resetPath = `${REST}/reset`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListGPSAPI = async (params?: IGetListGPSParams): Promise<IListResponse<IGPS>> => {
    const gps = `${REST}`;

    const response = await axiosInstanceDun.get(gps, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const resetGPSAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(resetPath, {
        deviceId,
    });

    const isSuccess = response.data;

    return isSuccess;
};

export const deleteGPSAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeGPSAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};

export const getLastGPSAPI = async (params?: IGetLastGPSParams): Promise<IGPS | null> => {
    const gps = `${REST}`;

    const response = await axiosInstanceDun.get(gps, {
        params: {
            deviceId: params?.deviceId,
            limit: 1,
            sort: 'GPS_Date',
            order: 'DESC',
        },
    });

    const result = response.data[0];

    if (!result) return null;

    return result;
};
