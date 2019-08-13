import * as React from "react";
import './start.css';
import {Reset} from "./Reset";
import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";
import {Fields} from "../../base/component/form/Fields";
import {isEmail, maxLength, minLength, required, sameAs} from "../../base/component/form/Validator";

interface LoginProps {
}

interface LoginState {
    activeForm: number;
}

enum LoginForm {
    SIGN_UP,
    SIGN_IN,
    RESET
}

export class Login extends React.Component <LoginProps, LoginState> {
    state = {
        activeForm: LoginForm.SIGN_IN
    };

    onClick = (loginForm: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        this.setState({
            activeForm: loginForm
        });
    };

    render() {
        if (this.state.activeForm === LoginForm.RESET) {
            return <Reset backBtn={this.onClick(LoginForm.SIGN_IN)}/>
        } else if (this.state.activeForm === LoginForm.SIGN_UP) {
            return <SignUp backBtn={this.onClick(LoginForm.SIGN_IN)}/>
        }
        return <SignIn forgotBtn={this.onClick(LoginForm.RESET)} signUpBtn={this.onClick(LoginForm.SIGN_UP)}/>
    }
}

export const LoginFields: Fields = {
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


