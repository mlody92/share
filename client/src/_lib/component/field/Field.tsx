import * as React from "react";
import {Textbox} from "../textbox/Textbox";
import {Dropdown} from "../dropdown/Dropdown";
import {FieldProps} from "./types/FieldProps";
import {Context} from "../form/types/Context";
import {FormCtx} from "../form/Form";
import {MultiTextbox} from "../textbox/MultiTextbox";
import {Errors} from "../error/Errors";


export const Field = (props: FieldProps) => {

    /**
     * Gets the validation error for the field
     * @param {IErrors} errors - All the errors from the form
     * @returns {string[]} - The validation error
     */
    const getError = (errors: Array<Errors>): string => {
        if (errors && errors.length > 0) {
            const error = errors.find(obj => obj.field === props.id);
            return error ? error.message : "";
        }
        return "";
    };

    /** Gets the inline styles for editor
     * @param {IErrors} errors - All the errors from the form
     * @returns {any} - The style object
     */
    const getEditorStyle = (errors: Array<Errors>): any =>
        getError(errors) ? {borderColor: "red"} : {};

    return (
        <FormCtx.Consumer>
            {(context: Context) => (
                <React.Fragment>
                    {props.label && <label htmlFor={props.id}>{props.label}</label>}

                    {props.editor!.toLowerCase() === "textbox" &&
                    <Textbox id={props.id} value={props.value} className={props.className} style={getEditorStyle(context.response.errors!)} context={context}
                             type={props.type}
                             placeholder={props.placeholder} autoFocus={props.autoFocus}/>}

                    {props.editor!.toLowerCase() === "multilinetextbox" &&
                    <MultiTextbox id={props.id} value={props.value} style={getEditorStyle(context.response.errors!)} context={context}/>}

                    {props.editor!.toLowerCase() === "dropdown" &&
                    <Dropdown id={props.id} value={props.value} options={props.options} style={getEditorStyle(context.response.errors!)} context={context}/>}

                    {/* TODO - display validation error */}
                    {getError(context.response.errors!) && (
                        <div style={{color: "red", fontSize: "80%"}}>
                            <p>{getError(context.response.errors!)}</p>
                        </div>
                    )}
                </React.Fragment>
            )}
        </FormCtx.Consumer>
    );
};
Field.defaultProps = {
    editor: "textbox"
};