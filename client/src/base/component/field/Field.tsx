import * as React from "react";
import {Textbox} from "../textbox/Textbox";
import MultiTextbox from "../textbox/MultiTextbox";
import {Dropdown} from "../dropdown/Dropdown";

/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface FieldProps {
    /* The unique field name */
    id: string;

    /* The label text for the field */
    label?: string;

    /* The editor for the field */
    editor?: Editor;

    /* The drop down items for the field */
    options?: Array<string>;

    /* The field value */
    value?: any;
}

export const Field: React.FunctionComponent<FieldProps> = ({
                                                               id,
                                                               label,
                                                               editor,
                                                               options,
                                                               value
                                                           }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}

            {editor!.toLowerCase() === "textbox" && <Textbox id={id} value={value}/>}

            {editor!.toLowerCase() === "multilinetextbox" && <MultiTextbox id={id} value={value}/>}

            {editor!.toLowerCase() === "dropdown" && <Dropdown id={id} value={value} options={options}/>}

            {/* TODO - display validation error */}
        </div>
    );
};
Field.defaultProps = {
    editor: "textbox"
};