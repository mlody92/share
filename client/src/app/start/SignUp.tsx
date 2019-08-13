import * as React from "react";
import {Form} from "../../base/component/form/Form";
import {Fields} from "../../base/component/form/Fields";
import {required, isEmail, maxLength, minLength, sameAs} from "../../base/component/form/Validator";
import {Field} from "../../base/component/field/Field";

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
                    render={() => (
                        <React.Fragment>
                                <form action="/signup/" className="form-signup">
                                    <div className="social-login">
                                        <button className="btn facebook-btn social-btn" type="button"><span><i
                                            className="fab fa-facebook-f"/> Sign up with Facebook</span></button>
                                    </div>
                                    <div className="social-login">
                                        <button className="btn google-btn social-btn" type="button"><span><i
                                            className="fab fa-google-plus-g"/> Sign up with Google+</span></button>
                                    </div>

                                    <p style={{textAlign: "center"}}>OR</p>

                                    <Field {...fields.name}/>
                                    <Field {...fields.email} />
                                    <Field {...fields.password} />
                                    <Field {...fields.repeatPassword} />
                                    <button className="btn btn-primary btn-block" type="submit"><i
                                        className="fas fa-user-plus"/> Sign Up
                                    </button>
                                    <a href="#" id="cancel_signup" onClick={this.props.backBtn}><i
                                        className="fas fa-angle-left"/> Back</a>
                                </form>
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