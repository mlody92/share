import * as React from "react";
import {FormContext} from "./form/FormContext";

export interface ComponentProps {
    /* The unique field name */
    id: string;

    /* The field value */
    value?: any;

    style?: React.CSSProperties;
    context: FormContext;
}