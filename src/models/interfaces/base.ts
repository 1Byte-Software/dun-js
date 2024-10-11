import { DateType, IdType } from '../types';

/**
 * Interface representing the base properties for an entity.
 */
export interface IBase {
    /** The id of the entity */
    id: IdType;

    /** The id of the user who created the entity */
    createdUserId?: IdType;

    /** The date when the entity was created */
    createdDate: DateType;

    /** The id of the user who last modified the entity */
    modifiedUserId?: IdType;

    /** The date when the entity was last modified */
    modifiedDate: DateType;
}
