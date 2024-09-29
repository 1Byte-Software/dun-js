import { axiosInstanceDun } from "@/config/axios/axiosClient";
import { DateType, IdType, IFile, IGetListFileParams } from "@/models";

const REST = 'files';

const resetPath = `${REST}/reset`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListFileAPI = async (params?: IGetListFileParams): Promise<IFile[]> => {
    const file = `${REST}`;

    const response = await axiosInstanceDun.get(file, {
        params,
    });

    return response.data;
};

export const resetFileAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(resetPath, {
        deviceId,
    });

    const isSuccess = response.data;

    return isSuccess;
};

export const deleteFileAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeFileAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
