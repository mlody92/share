import * as React from "react";
import './start.css';
import {Form} from "lib/component/form/Form";
import {Field} from "lib/component/field/Field";
import {Button} from "lib/component/button/Button";
import {Fields} from "lib/component/field/types/fields";
import {isEmail, maxLength, minLength, required, sameAs} from "lib/component/validate/Validator";

interface SignInProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface SignInState {
}

export class SignUp extends React.Component <SignInProps, SignInState> {
    render() {
        const fields: Fields = {
            name: {
                validation: [{rule: required}, {rule: maxLength, args: 20}],
                id: "name",
                placeholder: "Imie",
                autoFocus: true
            },
            email: {
                validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
                id: "email",
                placeholder: "Email"
            },
            password: {
                validation: [{rule: required}, {rule: minLength, args: 8}],
                id: "password",
                type: "password",
                placeholder: "Password"
            },
            repeatPassword: {
                validation: [{rule: required}, {rule: minLength, args: 8}, {rule: sameAs, args: "password"}],
                id: "repeatPassword",
                type: "password",
                placeholder: "Repeat Password"
            }
        };
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/user/insert"
                    formFields={fields}
                    className="form-signup"
                    fieldsHtml={() => (
                        <React.Fragment>
                            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign up</h1>
                            <div className="social-login">
                                <Button className="btn facebook-btn social-btn" iconCls="fab fa-facebook-f" value=" Sign up with Facebook"/>
                            </div>
                            <div className="social-login">
                                <Button className="btn google-btn social-btn" iconCls="fab fa-google-plus-g" value=" Sign up with Google+"/>
                            </div>
                            <hr/>
                            <Field {...fields.name}/>
                            <Field {...fields.email} />
                            <Field {...fields.password} />
                            <Field {...fields.repeatPassword} />
                        </React.Fragment>
                    )}
                    submit={{className: "btn btn-primary btn-block", iconCls: "fas fa-user-plus", value: " Sign Up"}}
                    finalHtml={() => (
                        <React.Fragment>
                            <hr/>
                            <a href="#" id="cancel_signup" onClick={this.props.backBtn}><i
                                className="fas fa-angle-left"/> Back</a>
                        </React.Fragment>
                    )}
                />
            </div>
        );
    }
}
