import * as React from "react";
import {Context} from "./form/types/context";

export type ComponentProps = {
    /* The unique field name */
    id: string;

    /* The field value */
    value?: any;

    style?: React.CSSProperties;
    context: Context;
}
