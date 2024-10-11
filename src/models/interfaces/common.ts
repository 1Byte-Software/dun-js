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

export interface IResponse<T> {
    statusCode?: number;
    data: T | null;
}
export interface IBaseObject {
    id: IdType;
    createdBy: string;
    createdDate: DateType;
    modifiedBy: string;
    modifiedDate: DateType;
}
