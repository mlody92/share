import * as React from "react";
import {Form} from "../base/component/form/Form";
import {Field} from "../base/component/field/Field";
import {Fields} from "../base/component/form/Fields";
import {isEmail, maxLength, minLength, required, sameAs} from "../base/component/form/Validator";
import {Reset} from "./Reset";

interface SignUpProps {
}

interface SignUpState {
    activeForm: string;
}

export class SignUp extends React.Component <SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);

        this.state = {
            activeForm: "form-signin"
        }
    }

    onClick = (className: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        this.setState({
            activeForm: className
        });
    };

    backBtn = () => {
        console.log("BACKBTN");
        e.preventDefault();
        this.setState({
            activeForm: "form-signin"
        });
    };


    render() {
        let activeForm;
        if (this.state.activeForm === "form-signin") {
            activeForm = <Form
                action="http://localhost:8080/api/signup2"
                fields={fields}
                render={() => (
                    <React.Fragment>
                        <div id="logreg-forms">
                            <form className="form-signin">
                                <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign in</h1>
                                <div className="social-login">
                                    <button className="btn facebook-btn social-btn" type="button"><span><i
                                        className="fab fa-facebook-f"/> Sign in with Facebook</span></button>
                                    <button className="btn google-btn social-btn" type="button"><span><i
                                        className="fab fa-google-plus-g"/> Sign in with Google+</span></button>
                                </div>
                                <p style={{textAlign: "center"}}> OR </p>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                       required={true} autoFocus={true}/>
                                <input type="password" id="inputPassword" className="form-control"
                                       placeholder="Password" required={true}/>

                                <button className="btn btn-success btn-block" type="submit"><i
                                    className="fas fa-sign-in-alt"/> Sign in
                                </button>
                                <a href="#" id="forgot_pswd" onClick={this.onClick("form-reset")}>Forgot password?</a>
                                <hr/>
                                {/*<p>Don't have an account!</p>  */}
                                <button className="btn btn-primary btn-block" type="button" id="btn-signup"
                                        onClick={this.onClick("form-signup")}><i
                                    className="fas fa-user-plus"/> Sign up New Account
                                </button>
                            </form>
                        </div>
                    </React.Fragment>
                )}
            />;
        } else if (this.state.activeForm === "form-reset") {
            activeForm = <Reset backBtn={this.backBtn}/>;
        } else if (this.state.activeForm === "form-signup") {
            activeForm = <Form
                action="http://localhost:8080/api/signup2"
                fields={fields}
                render={() => (
                    <React.Fragment>
                        <div id="logreg-forms">
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
                                <a href="#" id="cancel_signup" onClick={this.onClick("form-signin")}><i
                                    className="fas fa-angle-left"/> Back</a>
                            </form>
                        </div>
                    </React.Fragment>
                )}
            />;
        }
        return (
            activeForm
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