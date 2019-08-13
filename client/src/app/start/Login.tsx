import * as React from "react";
import './start.css';
import {Reset} from "./Reset";
import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";

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


