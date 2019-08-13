import * as React from "react";
import {Form} from "../../base/component/form/Form";
import {Fields} from "../../base/component/form/Fields";
import {isEmail, maxLength, required} from "../../base/component/form/Validator";
import {Field} from "../../base/component/field/Field";

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
                    submitBtnValue={"Reset Password"}
                    render={() => (
                        <React.Fragment>
                            <Field {...fields.email}/>
                        </React.Fragment>
                    )}
                />
                <a href="#" id="cancel_reset" onClick={this.props.backBtn}><i
                    className="fas fa-angle-left"/> Back</a>
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