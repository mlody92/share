import * as React from "react";
import './start.css';
import {Form} from "../../base/component/form/Form";
import {Field} from "../../base/component/field/Field";
import {Button} from "../../base/component/button/Button";
import {LoginFields} from "./Login";

interface SignUpProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface SignUpState {
}

export class Reset extends React.Component <SignUpProps, SignUpState> {
    render() {
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/api/reset"
                    fields={LoginFields}
                    className="form-reset"
                    render={() => (
                        <React.Fragment>
                            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Reset password</h1>
                            <Field {...LoginFields.email}/>
                            <Button type="submit" className={"btn btn-primary  btn-block"} iconCls={"fas fa-key"} value={" Reset Password"}/>
                            <a href="#" id="cancel_reset" onClick={this.props.backBtn}><i className="fas fa-angle-left"/> Back</a>
                        </React.Fragment>
                    )}
                />
            </div>
        );
    }
}