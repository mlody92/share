import * as React from "react";
import {TextboxProps} from "./TextboxProps";
import {FormCtx} from "../form/Form";
import {FormContext} from "../form/FormContext";

export const Textbox = ({id, value}: TextboxProps) => {
    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLInputElement>) => {
        context.setValues({[id]: e.currentTarget.value})
    };

    const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    return (
        <FormCtx.Consumer>
            {(context: FormContext) => (
                <input
                    id={id}
                    type="text"
                    value={value}
                    onChange={onChange(context)}
                    onBlur={onBlur}
                    className="form-control"
                />
            )}
        </FormCtx.Consumer>
    );
};


