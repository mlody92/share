import {Values} from "./Values";

export interface Validation {
    rule: (values: Values, fieldName: string, args: any) => string;
    args?: any;
}

