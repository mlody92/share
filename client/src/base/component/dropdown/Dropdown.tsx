import * as React from "react";
import {DropdownProps} from "./DropdownProps";

export const Dropdown = ({id, options, value}: DropdownProps) => {

    const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    const onBlur = (e: React.FormEvent<HTMLSelectElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    return (
        <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
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
    );
};