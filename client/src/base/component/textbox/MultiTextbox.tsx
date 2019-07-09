import * as React from "react";
import {MultiTextboxProps} from "./MultiTextboxProps";

export const MultiTextbox = ({id, value}: MultiTextboxProps) => {

    const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    const onBlur = (e: React.FormEvent<HTMLTextAreaElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="form-control"
        />
    );
};


export default MultiTextbox;