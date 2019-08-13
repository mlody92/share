import * as React from "react";
import './start.css';
import {Reset} from "./Reset";
import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";

interface LoginProps {
}

interface LoginState {
    activeForm: string;
}

export class Login extends React.Component <LoginProps, LoginState> {
    constructor(props: LoginProps) {
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

    render() {
        if (this.state.activeForm === "form-reset") {
            return <Reset backBtn={this.onClick("form-signin")}/>;
        } else if (this.state.activeForm === "form-signup") {
            return <SignUp backBtn={this.onClick("form-signin")}/>
        }
        return <SignIn forgotBtn={this.onClick("form-reset")} signUpBtn={this.onClick("form-signup")}/>
    }
}


