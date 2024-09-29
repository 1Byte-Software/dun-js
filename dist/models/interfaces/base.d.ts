import { DateType, IdType } from "../types";
export interface IBase {
    id: IdType;
    createdUserId?: IdType;
    createdDate: DateType;
    modifiedUserId?: IdType;
    modifiedDate: DateType;
}
