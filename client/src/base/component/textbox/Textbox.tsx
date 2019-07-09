import * as React from "react";
import {TextboxProps} from "./TextboxProps";

export const Textbox = ({id, value}: TextboxProps) => {
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="form-control"
        />
    );
};


