import * as React from "react";
import './start.css';
import {Form} from "../../base/component/form/Form";
import {Fields} from "../../base/component/form/Fields";
import {isEmail, maxLength, required} from "../../base/component/form/Validator";
import {Field} from "../../base/component/field/Field";
import {Button} from "../../base/component/button/Button";

interface SignUpProps {
    backBtn: (e: React.MouseEvent) => void;
}

interface SignUpState {
}

export class Reset extends React.Component <SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);
    }

    render() {
        return (
            <div id="logreg-forms">
                <Form
                    action="http://localhost:8080/api/reset"
                    fields={fields}
                    className="form-reset"
                    render={() => (
                        <React.Fragment>
                            <Field {...fields.email}/>
                            <Button type="submit" className={"btn btn-primary  btn-block"} iconCls={"fas fa-key"}
                                    value={" Reset Password"}/>
                            <a href="#" id="cancel_reset" onClick={this.props.backBtn}><i
                                className="fas fa-angle-left"/> Back</a>
                        </React.Fragment>
                    )}
                />
            </div>
        );
    }
}

const fields: Fields = {
    email: {
        type: "email",
        id: "resetEmail",
        validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 40}],
        placeholder: "Email",
        autoFocus: true
    },
};