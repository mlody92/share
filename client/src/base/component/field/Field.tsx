import * as React from "react";
import {Textbox} from "../textbox/Textbox";
import MultiTextbox from "../textbox/MultiTextbox";
import {Dropdown} from "../dropdown/Dropdown";
import {FieldProps} from "./FieldProps";


export const Field = ({id, label, editor, options, value}: FieldProps) => {
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