import * as React from "react";

export interface FormProps {
    /* The http path that the form will be posted to */
    action: string;

    /* A prop which allows content to be injected */
    render: () => React.ReactNode
}
