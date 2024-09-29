type IdType = string;
type DateType = Date | string;

export interface IPagination {
    totalItems: number;
    totalPractices?: number;
    totalPages?: number;
    pageNumber?: number;
    pageSize?: number;
}
export interface IListResponse<T> {
    items: T[];
    pagination: IPagination | null;
}

export interface IBreadcrumb {
    link?: string;
    name: string;
}
export interface IResponse<T> {
    statusCode?: number;
    data: T | null;
}
export interface IErrorNotPermission {
    httpCode: number;
}
export interface IResponseNotPermission {
    error: IErrorNotPermission;
}
export interface IOptionsSelect {
    value: string;
    label: string;
}
export type TObjectHasKeyAsString<T> = {
    [key: string]: T;
};
export interface IBaseObject {
    id: IdType;
    createdBy: string;
    createdDate: DateType;
    modifiedBy: string;
    modifiedDate: DateType;
}
