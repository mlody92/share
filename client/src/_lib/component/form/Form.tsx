import * as React from "react";
import {FormProps, FormState} from "./types/Form";
import {Response} from "../../communication/Response";
import {Communication} from "../../communication/Communication";
import {Arrays} from "../../array/Arrays";
import {Values} from "./types/Values";
import {Context} from "./types/Context";
import {Button} from "../button/Button";
import {Errors} from "../error/Errors";

/*
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
export const FormCtx = React.createContext<Context | undefined>(
    undefined
);


export class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super(props);
        this.state = {
            values: {},
            response: {success: true, errors: []},
            isLoading: false
        };
    }

    /**
     * Executes the validation rule for the field and updates the form errors
     * @param {string} fieldName - The field to validate
     * @returns {string} - The error message
     */
    private validate = (fieldName: string): Errors | null => {
        let newError: Errors | null = null;

        if (this.props.formFields[fieldName] && this.props.formFields[fieldName].validation) {
            this.props.formFields[fieldName].validation!.some((value => {
                // todo czy wyświetlać wszystkie błędy walidacji?
                const message = value.rule(this.state.values, fieldName, value.args);
                if (message) {
                    newError = {field: fieldName, message};
                }
                return message;
            }));
        }

        let errors = this.state.response.errors!;
        const errExist = this.state.response.errors!.find(obj => obj.field === fieldName);
        Arrays.removeFirst(errors, errExist);

        if (newError) {
            errors = [...errors, newError];
        }

        this.setState({
            response: {
                success: errors === undefined || errors.length === 0,
                errors
            }
        });
        return newError;
    };

    /**
     * Returns whether there are any errors in the errors object that is passed in
     * @param {Response} response
     */
    private haveErrors(response: Response) {
        return response.errors ? response.errors!.length > 0 : false;
    }

    /**
     * Handles form submission
     * @param {React.FormEvent<HTMLFormElement>} e - The form event
     */
    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
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
        const response: Response = {success: true, errors: []};
        Object.keys(this.props.formFields).map((fieldName: string) => {
            const items = this.validate(fieldName);
            if (items !== null) {
                response.errors!.push(items);
            }
        });
        this.setState({response});
        return !this.haveErrors(response);
    }

    /**
     * Submits the form to the http api
     * @returns {boolean} - Whether the form submission was successful or not
     */
    private async submitForm(): Promise<boolean> {
        try {
            this.setState({isLoading: true});
            const responseServer = await Communication.executePostAsJson(this.props.action, this.state.values);
            this.setState({response: responseServer});
            return responseServer.success;
        } catch (ex) {
            return false;
        } finally {
            this.setState({isLoading: false});
        }
    }

    /**
     * Stores new field values in state
     * @param {IValues} values - The new field values
     */
    private setValues = (values: Values) => {
        this.setState({values: {...this.state.values, ...values}});
    };

    private createIconCls() {
        return this.state.isLoading ? "spinner-border spinner-border-sm" : this.props.submit!.iconCls;
    }

    render() {
        const {submitSuccess, response} = this.state;
        const context: Context = {
            ...this.state,
            setValues: this.setValues,
            validate: this.validate
        };
        return (
            <FormCtx.Provider value={context}>
                <form onSubmit={this.handleSubmit} noValidate={true} className={this.props.className}>
                    {this.props.fieldsHtml()}
                    {/*submit*/}
                    {typeof this.props.submit === "object" &&
                    <Button type="submit" className={this.props.submit.className} disabled={this.haveErrors(response)} iconCls={this.createIconCls()}
                            value={this.props.submit.value}/>}

                    {/*submit info*/}
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted! {response.message}
                        </div>
                    )}
                    {submitSuccess === false &&
                    !this.haveErrors(response) && (
                        <div className="alert alert-danger" role="alert">
                            Sorry, an unexpected error has occurred {response.message}
                        </div>
                    )}
                    {submitSuccess === false &&
                    this.haveErrors(response) && (
                        <div className="alert alert-danger" role="alert">
                            Sorry, the form is invalid. Please review, adjust and try
                            again {response.message}
                        </div>
                    )}
                    {this.props.finalHtml && this.props.finalHtml()}
                </form>
            </FormCtx.Provider>
        );
    }
}