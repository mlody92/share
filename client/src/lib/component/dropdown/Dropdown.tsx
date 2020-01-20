import * as React from "react";
import {Context} from "../form/types";
import {ComponentProps} from "../componentProps";

export interface DropdownProps extends ComponentProps {
    /* The drop down items for the field */
    options?: Array<string>;
}

export const Dropdown = (props: DropdownProps) => {
    const onChange = (context: Context) => (e: React.FormEvent<HTMLSelectElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    const onBlur = (context: Context) => (e: React.FormEvent<HTMLSelectElement>) => {
        context.validate(props.id)
    };

    return (
        <select
            id={props.id}
            name={props.id}
            value={props.value}
            onChange={onChange(props.context)}
            onBlur={onBlur(props.context)}
            className="form-control"
            style={props.style}
        >
            {props.options &&
            props.options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
