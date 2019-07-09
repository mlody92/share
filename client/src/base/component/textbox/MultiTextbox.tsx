import * as React from "react";
import {MultiTextboxProps} from "./MultiTextboxProps";
import {FormContext} from "../form/Form";

export const MultiTextbox = ({id, value}: MultiTextboxProps) => {

    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        context.setValues({[id]: e.currentTarget.value})
    };

    const onBlur = (e: React.FormEvent<HTMLTextAreaElement>) => {
        console.log(e) /* TODO: push change to form values */
    };

    return (
        <FormContext.Consumer>
            {(context: FormContext) => (
                <textarea
                    id={id}
                    value={value}
                    onChange={onChange(context)}
                    onBlur={onBlur}
                    className="form-control"
                />
            )}
        </FormContext.Consumer>
    );
};


export default MultiTextbox;