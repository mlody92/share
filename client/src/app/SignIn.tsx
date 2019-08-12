import * as React from "react";
import {Form} from "../base/component/form/Form";
import {Fields} from "../base/component/form/Fields";
import {Reset} from "./Reset";
import {SignUp} from "./SignUp";
import {Button} from "../base/component/button/Button";
import {isEmail, maxLength, minLength, required} from "../base/component/form/Validator";
import {Field} from "../base/component/field/Field";

interface SignUpProps {
}

interface SignUpState {
    activeForm: string;
}

export class SignIn extends React.Component <SignUpProps, SignUpState> {
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

    backBtn = (e: React.MouseEvent) => {
        e.preventDefault();
        this.setState({
            activeForm: "form-signin"
        });
    };


    render() {
        if (this.state.activeForm === "form-reset") {
            return <Reset backBtn={this.backBtn}/>;
        } else if (this.state.activeForm === "form-signup") {
            return <SignUp backBtn={this.backBtn}/>
        }
        return (
            <Form
                action="http://localhost:8080/api/signup2"
                fields={fields}
                render={() => (
                    <React.Fragment>
                        <div id="logreg-forms">
                            <form className="form-signin">
                                <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign in</h1>
                                <div className="social-login">
                                    <Button className={"btn facebook-btn social-btn"} iconCls={"fab fa-facebook-f"}
                                            value={" Sign in with Facebook"}/>
                                    <Button className={"btn google-btn social-btn"} iconCls={"fab fa-google-plus-g"}
                                            value={" Sign in with Google+"}/>
                                </div>
                                <p style={{textAlign: "center"}}> OR </p>
                                <Field {...fields.email} />
                                <Field {...fields.password} />
                                <Button className={"btn btn-success btn-block"} iconCls={"fas fa-sign-in-alt"}
                                        value={" Sign in"}/>

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
            />
        );
    }
}


const fields: Fields = {
    email: {
        type: "email",
        id: "email",
        validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
        placeholder: "Email"
    },
    password: {
        id: "password",
        validation: [{rule: required}, {rule: minLength, args: 8}],
        type: "password",
        placeholder: "Password"
    }
};