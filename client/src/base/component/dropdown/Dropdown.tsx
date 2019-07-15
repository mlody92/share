import * as React from "react";
import {DropdownProps} from "./DropdownProps";
import {FormCtx} from "../form/Form";
import {FormContext} from "../form/FormContext";

export const Dropdown = ({id, options, value, style}: DropdownProps) => {

    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLSelectElement>) => {
        context.setValues({[id]: e.currentTarget.value})
    };

    const onBlur = (context: FormContext) => (e: React.FormEvent<HTMLSelectElement>) => {
        context.validate(id)
    };



    return (
        <FormCtx.Consumer>
            {(context: FormContext) => (
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange(context)}
                    onBlur={onBlur(context)}
                    className="form-control"
                    style={style}
                >
                    {options &&
                    options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </FormCtx.Consumer>
    );


};