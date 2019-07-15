import * as React from "react";
import {FormState} from "./FormState";
import {FormProps} from "./FormProps";
import {Errors} from "./Errors";
import {Values} from "./Values";
import {FormContext} from "./FormContext";

/*
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
export const FormCtx = React.createContext<FormContext | undefined>(
    undefined
);


export class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);

        const errors: Errors = {};
        const values: Values = {};
        this.state = {
            errors,
            values
        };
    }

    /**
     * Executes the validation rule for the field and updates the form errors
     * @param {string} fieldName - The field to validate
     * @returns {string} - The error message
     */
    private validate = (fieldName: string): string => {
        let newError: string = "";

        if (
            this.props.fields[fieldName] &&
            this.props.fields[fieldName].validation
        ) {
            newError = this.props.fields[fieldName].validation!.rule(
                this.state.values,
                fieldName,
                this.props.fields[fieldName].validation!.args
            );
        }
        this.state.errors[fieldName] = newError;
        this.setState({
            errors: { ...this.state.errors, [fieldName]: newError }
        });
        return newError;
    };

    /**
     * Returns whether there are any errors in the errors object that is passed in
     * @param {Errors} errors - The field errors
     */
    private haveErrors(errors: Errors) {
        let haveError: boolean = false;
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true;
            }
        });
        return haveError;
    }

    /**
     * Handles form submission
     * @param {React.FormEvent<HTMLFormElement>} e - The form event
     */
    private handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        console.log(this.state.values);

        if (this.validateForm()) {
            const submitSuccess: boolean = await this.submitForm();
            this.setState({submitSuccess});
        }
    };

    /**
     * Executes the validation rules for all the fields on the form and sets the error state
     * @returns {boolean} - Whether the form is valid or not
     */
    private validateForm(): boolean {
        const errors: Errors = {};
        Object.keys(this.props.fields).map((fieldName: string) => {
            errors[fieldName] = this.validate(fieldName);
        });
        this.setState({ errors });
        return !this.haveErrors(errors);
    }

    /**
     * Submits the form to the http api
     * @returns {boolean} - Whether the form submission was successful or not
     */
    private async submitForm(): Promise<boolean> {
        try {
            const response = await fetch(this.props.action, {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }),
                body: JSON.stringify(this.state.values)
            });
            return response.ok;
        } catch (ex) {
            return false;
        }
    }

    /**
     * Stores new field values in state
     * @param {IValues} values - The new field values
     */
    private setValues = (values: Values) => {
        this.setState({values: {...this.state.values, ...values}});
    };

    render() {
        const {submitSuccess, errors} = this.state;
        const context: FormContext = {
            ...this.state,
            setValues: this.setValues,
            validate: this.validate
        };
        return (
            <FormCtx.Provider value={context}>
                <form onSubmit={this.handleSubmit} noValidate={true}>
                    <div className="container">

                        {this.props.render()}

                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={this.haveErrors(errors)}
                            >
                                Submit
                            </button>
                        </div>
                        {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                The form was successfully submitted!
                            </div>
                        )}
                        {submitSuccess === false &&
                        !this.haveErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Sorry, an unexpected error has occurred
                            </div>
                        )}
                        {submitSuccess === false &&
                        this.haveErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Sorry, the form is invalid. Please review, adjust and try again
                            </div>
                        )}
                    </div>
                </form>
            </FormCtx.Provider>
        );
    }
}