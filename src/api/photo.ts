import { axiosInstanceDun } from "@/config/axios/axiosClient";
import { DateType, IdType, IGetListPhotoParams, IPhoto } from "@/models";

const REST = 'photos';

const resetPath = `${REST}/reset`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListPhotoAPI = async (params?: IGetListPhotoParams): Promise<IPhoto[]> => {
    const photo = `${REST}`;

    const response = await axiosInstanceDun.get(photo, {
        params,
    });

    return response.data;
};

export const resetPhotoAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(resetPath, {
        deviceId,
    });

    const isSuccess = response.data;

    return isSuccess;
};

export const deletePhotoAPI = async (id: IdType): Promise<boolean> => {
    const api = `${REST}/${id}`;

    const response = await axiosInstanceDun.delete(api);

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimePhotoAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
