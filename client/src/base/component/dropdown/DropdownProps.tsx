import * as React from "react";
import {FormContext} from "../form/FormContext";

export interface DropdownProps {
    /* The unique field name */
    id: string;

    /* The drop down items for the field */
    options?: Array<string>;

    /* The field value */
    value?: any;

    style?: React.CSSProperties;
    context: FormContext;
}