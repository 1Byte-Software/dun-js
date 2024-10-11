import { axiosInstanceDun } from '../config/axios/axiosClient';
import { ICreateOrUpdateDeviceSettingSync, IDeviceSettingSync, IGetOrCreateDeviceSettingSync } from '../models';

const REST = 'devices/setting-sync';

const getOrCreatePath = `${REST}/get-or-create`;
const createOrUpdatePath = `${REST}/create-or-update`;

export const getDeviceSettingSync = async (params?: IGetOrCreateDeviceSettingSync): Promise<IDeviceSettingSync> => {
    const response = await axiosInstanceDun.get(getOrCreatePath, {
        params,
    });

    return response.data;
};

export const createOrUpdateDeviceSettingSync = async (
    params?: ICreateOrUpdateDeviceSettingSync,
): Promise<ICreateOrUpdateDeviceSettingSync> => {
    const response = await axiosInstanceDun.post(createOrUpdatePath, params);

    return response.data;
};
