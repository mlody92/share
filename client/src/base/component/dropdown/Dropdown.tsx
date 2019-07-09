import * as React from "react";
import {DropdownProps} from "./DropdownProps";
import {FormContext} from "../form/Form";

export const Dropdown = ({id, options, value}: DropdownProps) => {

    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLSelectElement>) => {
        context.setValues({[id]: e.currentTarget.value})
    };

    const onBlur = (e: React.FormEvent<HTMLSelectElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    return (
        <FormContext.Consumer>
            {(context: FormContext) => (
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange(context)}
                    onBlur={onBlur}
                    className="form-control"
                >
                    {options &&
                    options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </FormContext.Consumer>
    );


};