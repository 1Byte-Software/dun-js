import { axiosInstanceDun } from '../config/axios/axiosClient';
import {
    IAggregateDevice,
    IDeleteDeviceParams,
    IEditDeviceParams,
    IEditDevicePayload,
    IGetListAggregateDevicesParams,
} from '../models';

const REST = 'devices';
const GET_ALL_AGGREGATE_DEVICES_PATH = `${REST}/owner`;

export const getAllAggregateDevicesAPI = async (
    params: IGetListAggregateDevicesParams,
): Promise<IAggregateDevice[]> => {
    const response = await axiosInstanceDun.get(GET_ALL_AGGREGATE_DEVICES_PATH, {
        params,
    });

    return response.data;
};

export const deleteDeviceAPI = async (params: IDeleteDeviceParams) => {
    const { id } = params;
    const url = `${REST}/${id}`;

    return await axiosInstanceDun.delete(url);
};

export const updateDeviceAPI = async (params: IEditDeviceParams, payload: IEditDevicePayload) => {
    const { id } = params;
    const url = `${REST}/${id}`;

    const response = await axiosInstanceDun.patch(url, payload);

    return response.data;
};
