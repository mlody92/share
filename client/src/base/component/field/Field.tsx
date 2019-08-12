import * as React from "react";
import {Textbox} from "../textbox/Textbox";
import {Dropdown} from "../dropdown/Dropdown";
import {FieldProps} from "./FieldProps";
import {FormContext} from "../form/FormContext";
import {FormCtx} from "../form/Form";
import {MultiTextbox} from "../textbox/MultiTextbox";
import {Errors} from "../form/Errors";


export const Field = (props: FieldProps) => {

    /**
     * Gets the validation error for the field
     * @param {IErrors} errors - All the errors from the form
     * @returns {string[]} - The validation error
     */
    const getError = (errors: Errors): string => (errors ? errors[props.id] : "");

    /** Gets the inline styles for editor
     * @param {IErrors} errors - All the errors from the form
     * @returns {any} - The style object
     */
    const getEditorStyle = (errors: Errors): any =>
        getError(errors) ? { borderColor: "red" } : {};

    return (
        <FormCtx.Consumer>
            {(context: FormContext) => (
                // <div className="form-group">
                <div >
                    {props.label && <label htmlFor={props.id}>{props.label}</label>}

                    {props.editor!.toLowerCase() === "textbox" && <Textbox id={props.id} value={props.value} style={getEditorStyle(context.response.errors)} context={context} type={props.type} placeholder={props.placeholder} autoFocus={props.autoFocus}  />}

                    {props.editor!.toLowerCase() === "multilinetextbox" && <MultiTextbox id={props.id} value={props.value} style={getEditorStyle(context.response.errors)} context={context}/>}

                    {props.editor!.toLowerCase() === "dropdown" && <Dropdown id={props.id} value={props.value} options={props.options} style={getEditorStyle(context.response.errors)} context={context}/>}

                    {/* TODO - display validation error */}
                    {getError(context.response.errors) && (
                        <div style={{color: "red", fontSize: "80%"}}>
                            <p>{getError(context.response.errors)}</p>
                        </div>
                    )}
                </div>
            )}
        </FormCtx.Consumer>
    );
};
Field.defaultProps = {
    editor: "textbox"
};