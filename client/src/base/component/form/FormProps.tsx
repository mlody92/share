import * as React from "react";
import {Map} from "./Map";
import {FieldProps} from "../field/FieldProps";

export interface FormProps {
    /* The http path that the form will be posted to */
    action: string;

    /* The props for all the fields on the form */
    fields: Map<FieldProps>;

    /* A prop which allows content to be injected */
    render: () => React.ReactNode
}
