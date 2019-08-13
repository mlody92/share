import * as React from "react";
import {Context} from "../form/types/Context";
import {ComponentProps} from "../ComponentProps";

export interface TextboxProps extends ComponentProps {
    type: string;
    placeholder?: string;
    autoFocus?: boolean;
}

export const Textbox = (props: TextboxProps) => {
    const onChange = (context: Context) => (e: React.FormEvent<HTMLInputElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    // const onBlur = (context: Context) => (e: React.FormEvent<HTMLInputElement>) => {
    //     context.validate(props.id)
    // };

    return (
        <input
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={onChange(props.context)}
            // onBlur={onBlur(props.context)}
            className="form-control"
            style={props.style}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
        />
    );
};

Textbox.defaultProps = {
    type: "textbox"
};

