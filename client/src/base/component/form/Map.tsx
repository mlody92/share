export interface Map<T> {
    /* The validation error messages for each field (key is the field name */
    [key: string]: T;
}
