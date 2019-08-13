import * as React from "react";
import {Fields} from "./Fields";

export interface FormProps {
    /* The http path that the form will be posted to */
    action: string;

    /* The props for all the fields on the form */
    fields: Fields;

    /* A prop which allows content to be injected */
    render: () => React.ReactNode
    className? : string;
    submitBtnHtml?: () => React.ReactNode
    submitBtnValue?: string;
}
