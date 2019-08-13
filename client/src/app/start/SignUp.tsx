import * as React from "react";
import './start.css';
import {Form} from "../../base/component/form/Form";
import {Fields} from "../../base/component/form/Fields";
import {required, isEmail, maxLength, minLength, sameAs} from "../../base/component/form/Validator";
import {Field} from "../../base/component/field/Field";
import {Button} from "../../base/component/button/Button";

interface SignInProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface SignInState {
}

export class SignUp extends React.Component <SignInProps, SignInState> {
    constructor(props: SignInProps) {
        super(props);
    }

    render() {
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/api/signup2"
                    fields={fields}
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

                            <Field {...fields.name}/>
                            <Field {...fields.email} />
                            <Field {...fields.password} />
                            <Field {...fields.repeatPassword} />
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

const fields: Fields = {
    name: {
        id: "name",
        validation: [{rule: required}, {rule: maxLength, args: 20}],
        placeholder: "Imie",
        autoFocus: true
    },
    email: {
        id: "email",
        validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
        placeholder: "Email"
    },
    password: {
        id: "password",
        validation: [{rule: required}, {rule: minLength, args: 8}],
        type: "password",
        placeholder: "Password"
    },
    repeatPassword: {
        id: "repeatPassword",
        validation: [{rule: required}, {rule: minLength, args: 8}, {rule: sameAs, args: "password"}],
        type: "password",
        placeholder: "Repeat Password"
    }
};