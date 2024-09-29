import { DateType, ICalendar, IdType, IGetListCalendarParams } from "@/models";
export declare const getListCalendarAPI: (params?: IGetListCalendarParams) => Promise<ICalendar[]>;
export declare const resetCalendarAPI: (deviceId: IdType) => Promise<boolean>;
export declare const getLastSyncTimeCalendarAPI: (deviceId: IdType) => Promise<DateType | null>;
