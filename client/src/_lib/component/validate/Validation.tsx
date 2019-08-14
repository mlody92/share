import {Values} from "../form/types/Values";

export interface Validation {
    rule: (values: Values, fieldName: string, args: any) => string;
    args?: any;
}

