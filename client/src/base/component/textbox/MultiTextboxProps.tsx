import * as React from "react";
import {FormContext} from "../form/FormContext";

export interface MultiTextboxProps {
    /* The unique field name */
    id: string;

    /* The field value */
    value?: any;

    style?: React.CSSProperties;
    context:FormContext;
}
