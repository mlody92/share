import * as React from "react";
import {Context} from "../form/types/Context";
import {ComponentProps} from "../ComponentProps";

export function MultiTextbox(props: ComponentProps) {
    const onChange = (context: Context) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    const onBlur = (context: Context) => (e: React.FormEvent<HTMLTextAreaElement>) => {
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
