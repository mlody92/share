import * as React from "react";
import './start.css';
import {Form} from "lib/component/form/Form";
import {Button} from 'lib/component/button';
import {Field} from "lib/component/field/Field";
import {Fields} from "lib/component/field/types/Fields";
import {isEmail, maxLength, required} from "lib/component/validate/Validator";

interface SignUpProps {
    forgotBtn: (e: React.MouseEvent) => void;
    signUpBtn: (e: React.MouseEvent) => void;
}

interface SignUpState {
}

export class SignIn extends React.Component <SignUpProps, SignUpState> {
    render() {
        const fields: Fields = {
            email: {
                id: "email",
                // validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
                placeholder: "Email"
            },
            username: {
                id: "username",
                validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
                placeholder: "Username"
            },
            password: {
                id: "password",
                validation: [{rule: required}],
                type: "password",
                placeholder: "Password"
            }
        };
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/login"
                    formFields={fields}
                    className={"form-signin"}
                    fieldsHtml={() => (
                        <React.Fragment>
                            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign in</h1>
                            <div className="social-login">
                                <Button className={"btn facebook-btn social-btn"} iconCls={"fab fa-facebook-f"}
                                        value={" Sign in with Facebook"}/>
                                <Button className={"btn google-btn social-btn"} iconCls={"fab fa-google-plus-g"}
                                        value={" Sign in with Google+"}/>
                            </div>
                            <hr/>
                            <Field {...fields.username} />
                            <Field {...fields.password} />
                        </React.Fragment>
                    )}
                    submit={{className: "btn btn-success btn-block", iconCls: "fas fa-sign-in-alt", value: " Sign in"}}
                    finalHtml={() => (
                        <React.Fragment>
                            <a href="#" id="forgot_pswd" onClick={this.props.forgotBtn}>Forgot password?</a>
                            <hr/>
                            <Button id={"btn-signup"} className={"btn btn-primary btn-block"}
                                    iconCls={"fas fa-user-plus"} value={" Sign up New Account"}
                                    onClick={this.props.signUpBtn}/>
                        </React.Fragment>
                    )}

                />
            </div>
        );
    }
}

