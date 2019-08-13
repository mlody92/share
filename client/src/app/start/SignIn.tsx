import * as React from "react";
import './start.css';
import {Form} from "../../base/component/form/Form";
import {Button} from "../../base/component/button/Button";
import {Field} from "../../base/component/field/Field";
import {LoginFields} from "./Login";

interface SignUpProps {
    forgotBtn: (e: React.MouseEvent) => void;
    signUpBtn: (e: React.MouseEvent) => void;
}

interface SignUpState {
}

export class SignIn extends React.Component <SignUpProps, SignUpState> {
    render() {
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/api/signup2"
                    fields={LoginFields}
                    className={"form-signin"}
                    render={() => (
                        <React.Fragment>
                            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign in</h1>
                            <div className="social-login">
                                <Button className={"btn facebook-btn social-btn"} iconCls={"fab fa-facebook-f"}
                                        value={" Sign in with Facebook"}/>
                                <Button className={"btn google-btn social-btn"} iconCls={"fab fa-google-plus-g"}
                                        value={" Sign in with Google+"}/>
                            </div>
                            <hr/>
                            <Field {...LoginFields.email} />
                            <Field {...LoginFields.password} />
                            <Button type="submit" className={"btn btn-success btn-block"} iconCls={"fas fa-sign-in-alt"}
                                    value={" Sign in"}/>
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

