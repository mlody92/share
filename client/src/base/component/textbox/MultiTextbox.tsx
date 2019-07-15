import * as React from "react";
import {MultiTextboxProps} from "./MultiTextboxProps";
import {FormContext} from "../form/FormContext";

export function MultiTextbox(props: MultiTextboxProps) {
    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    const onBlur = (context: FormContext) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        context.validate(props.id)
    };

    return (
        <textarea
            id={props.id}
            value={props.value}
            onChange={onChange(props.context)}
            onBlur={onBlur(props.context)}
            className="form-control"
            style={props.style}
        />
    );
}
