import { IAggregateDevice, IDeleteDeviceParams, IEditDeviceParams, IEditDevicePayload, IGetListAggregateDevicesParams } from "@/models";
export declare const getAllAggregateDevicesAPI: (params: IGetListAggregateDevicesParams) => Promise<IAggregateDevice[]>;
export declare const deleteDeviceAPI: (params: IDeleteDeviceParams) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const updateDeviceAPI: (params: IEditDeviceParams, payload: IEditDevicePayload) => Promise<any>;
