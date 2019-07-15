import * as React from "react";
import {TextboxProps} from "./TextboxProps";
import {FormContext} from "../form/FormContext";

export function Textbox(props: TextboxProps) {
    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLInputElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    const onBlur = (context: FormContext) => (e: React.FormEvent<HTMLInputElement>) => {
        context.validate(props.id)
    };

    return (
        <input
            id={props.id}
            type="text"
            value={props.value}
            onChange={onChange(props.context)}
            onBlur={onBlur(props.context)}
            className="form-control"
            style={props.style}

        />
    );
}

