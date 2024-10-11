import { axiosInstanceDun } from '../config/axios/axiosClient';
import { DateType, IContact, IdType, IGetListContactParams } from '../models';
import { IListResponse } from '../models/interfaces/common';
import { formatStringByObj } from '../utils/string';

const REST = 'contacts';

const resetPath = `${REST}/reset/{deviceId}`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListContactAPI = async (params?: IGetListContactParams): Promise<IListResponse<IContact>> => {
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

export const resetContactAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(
        formatStringByObj(resetPath, {
            deviceId,
        }),
    );

    const isSuccess = response.data;

    return isSuccess;
};

export const deleteContactAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeContactAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
