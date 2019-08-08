import * as React from "react";
import {DropdownProps} from "./DropdownProps";
import {FormContext} from "../form/FormContext";

export function Dropdown(props: DropdownProps) {

    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLSelectElement>) => {
        context.setValues({[props.id]: e.currentTarget.value})
    };

    const onBlur = (context: FormContext) => (e: React.FormEvent<HTMLSelectElement>) => {
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
}