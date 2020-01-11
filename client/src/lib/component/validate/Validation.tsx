import {Values} from "../form/types/values";

export interface Validation {
    rule: (values: Values, fieldName: string, args: any) => string;
    args?: any;
}

