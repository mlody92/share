import * as React from "react";
import {Context} from "../form/types/context";
import {ComponentProps} from "../componentProps";

export interface TextboxProps extends ComponentProps {
    type: string;
    placeholder?: string;
    autoFocus?: boolean;
    className: string
}

export const Textbox = (props: TextboxProps) => {
    const onChange = (context: Context) => (e: React.FormEvent<HTMLInputElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    const onBlur = (context: Context) => (e: React.FormEvent<HTMLInputElement>) => {
        context.validate(props.id)
    };

    return (
        <input
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={onChange(props.context)}
            onBlur={onBlur(props.context)}
            className={props.className}
            style={props.style}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
        />
    );
};

Textbox.defaultProps = {
    type: "textbox",
    className: "form-control"
};

