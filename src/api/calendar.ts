import { axiosInstanceDun } from '../config/axios/axiosClient';
import { DateType, ICalendar, IdType, IGetListCalendarParams } from '../models';
import { formatStringByObj } from '../utils/string';

const REST = 'calendars';

const resetPath = `${REST}/reset/{deviceId}`;
const lastClientTimePath = `${REST}/last-client-time`;

export const getListCalendarAPI = async (params?: IGetListCalendarParams): Promise<ICalendar[]> => {
    const calendar = `${REST}`;

    const response = await axiosInstanceDun.get(calendar, {
        params,
    });

    return response.data;
};

export const resetCalendarAPI = async (deviceId: IdType): Promise<boolean> => {
    const response = await axiosInstanceDun.post(
        formatStringByObj(resetPath, {
            deviceId,
        }),
    );

    const isSuccess = response.data;

    return isSuccess;
};

export const getLastSyncTimeCalendarAPI = async (deviceId: IdType): Promise<DateType | null> => {
    const params = {
        deviceId,
    };

    const response = await axiosInstanceDun.get(lastClientTimePath, {
        params,
    });

    const lastSyncTime: string = response.data;

    return lastSyncTime;
};
