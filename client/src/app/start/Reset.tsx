import * as React from "react";
import './start.css';
import {Form} from "../../base/component/form/Form";
import {Field} from "../../base/component/field/Field";
import {Fields} from "../../base/component/form/Fields";
import {isEmail, maxLength, required} from "../../base/component/form/Validator";

interface SignUpProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface SignUpState {
}

export class Reset extends React.Component <SignUpProps, SignUpState> {
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
                    submit={{className: "btn btn-primary btn-block", iconCls: "fas fa-key", value: " Reset Password"}}
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