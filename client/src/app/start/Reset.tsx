import * as React from "react";
import './start.css';
import {Form} from "lib/component/form/Form";
import {Field} from "lib/component/field/Field";
import {Fields} from "lib/component/field/types/Fields";
import {isEmail, maxLength, required} from "lib/component/validate/Validator";

interface ResetProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface ResetState {
}

export class Reset extends React.Component <ResetProps, ResetState> {
    render() {
        const fields: Fields = {
            email: {
                id: "email",
                validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
                placeholder: "Email"
            }
        };
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/api/reset"
                    formFields={fields}
                    className="form-reset"
                    fieldsHtml={() => (
                        <React.Fragment>
                            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Reset password</h1>
                            <Field {...fields.email}/>
                        </React.Fragment>
                    )}
                    submit={{className: "btn btn-success btn-block", value: " Reset Password", iconCls: "fas fa-key"}}
                    finalHtml={() => (
                        <React.Fragment>
                            <a href="#" id="cancel_reset" onClick={this.props.backBtn}><i className="fas fa-angle-left"/> Back</a>
                        </React.Fragment>
                    )}
                />
            </div>
        );
    }
}
