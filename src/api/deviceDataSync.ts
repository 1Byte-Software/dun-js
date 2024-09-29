import { axiosInstanceDun } from '@/config/axios/axiosClient';
import { IDeviceDataSync, IGetOrCreateDeviceDataSync } from '@/models';

const REST = 'devices/data-sync';

const getOrCreatePath = `${REST}/get-or-create`;
const createOrUpdatePath = `${REST}/create-or-update`;

export const getOrCreateDeviceDataSync = async (
  params?: IGetOrCreateDeviceDataSync,
): Promise<IDeviceDataSync> => {
  const response = await axiosInstanceDun.get(getOrCreatePath, {
    params,
  });

  return response.data;
};

export const createOrUpdateDeviceDataSync = async (
  params?: IDeviceDataSync,
): Promise<IDeviceDataSync> => {
  const response = await axiosInstanceDun.get(createOrUpdatePath, {
    params,
  });

  return response.data;
};
