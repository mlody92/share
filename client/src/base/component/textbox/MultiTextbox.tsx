import * as React from "react";
import {MultiTextboxProps} from "./MultiTextboxProps";
import {FormCtx} from "../form/Form";
import {FormContext} from "../form/FormContext";

export const MultiTextbox = ({id, value, style}: MultiTextboxProps) => {

    const onChange = (context: FormContext) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        context.setValues({[id]: e.currentTarget.value})
    };

    const onBlur = (context: FormContext) =>(e: React.FormEvent<HTMLTextAreaElement>) => {
        context.validate(id)
    };

    return (
        <FormCtx.Consumer>
            {(context: FormContext) => (
                <textarea
                    id={id}
                    value={value}
                    onChange={onChange(context)}
                    onBlur={onBlur(context)}
                    className="form-control"
                    style={style}
                />
            )}
        </FormCtx.Consumer>
    );
};


export default MultiTextbox;