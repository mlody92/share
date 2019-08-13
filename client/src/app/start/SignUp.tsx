import * as React from "react";
import './start.css';
import {Form} from "../../base/component/form/Form";
import {Field} from "../../base/component/field/Field";
import {Button} from "../../base/component/button/Button";
import {LoginFields} from "./Login";

interface SignInProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface SignInState {
}

export class SignUp extends React.Component <SignInProps, SignInState> {
    render() {
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/api/signup2"
                    fields={LoginFields}
                    className="form-signup"
                    render={() => (
                        <React.Fragment>
                            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign up</h1>
                            <div className="social-login">
                                <Button className="btn facebook-btn social-btn" iconCls="fab fa-facebook-f" value=" Sign up with Facebook"/>
                            </div>
                            <div className="social-login">
                                <Button className="btn google-btn social-btn" iconCls="fab fa-google-plus-g" value=" Sign up with Google+"/>
                            </div>

                            <p style={{textAlign: "center"}}>OR</p>

                            <Field {...LoginFields.name}/>
                            <Field {...LoginFields.email} />
                            <Field {...LoginFields.password} />
                            <Field {...LoginFields.repeatPassword} />
                            <Button className="btn btn-primary btn-block" type="submit" iconCls="fas fa-user-plus" value=" Sign Up"/>
                            <a href="#" id="cancel_signup" onClick={this.props.backBtn}><i
                                className="fas fa-angle-left"/> Back</a>
                        </React.Fragment>
                    )}
                />
            </div>
        );
    }
}