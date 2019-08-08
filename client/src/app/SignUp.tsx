import * as React from "react";
import {Form} from "../base/component/form/Form";
import {Field} from "../base/component/field/Field";
import {isEmail, minLength, required, sameAs} from "../base/component/form/Validator";
import {Fields} from "../base/component/form/Fields";

export const SignUp: React.FunctionComponent = () => {
    const fields: Fields = {
        name: {
            id: "name",
            label: "Name",
            validation: [{rule: required}]
        },
        email: {
            id: "email",
            label: "Email",
            validation: [{rule: isEmail}, {rule: required}]
        },
        password: {
            id: "password",
            label: "Password",
            validation: [{rule: required}, {rule: minLength, args: 1}],
            type: "password"
        },
        confirmPassword: {
            id: "confirmPassword",
            label: "Confirm Password",
            validation: [{rule: required}, {rule: minLength, args: 1}, {rule: sameAs, args: "password"}],
            type: "password"
        }
    };
    return (
        <Form
            action="http://localhost:8080/api/signup2"
            fields={fields}
            render={() => (
                <React.Fragment>
                    <div className="alert alert-info" role="alert">
                        Sign up.
                    </div>
                    <Field {...fields.name} />
                    <Field {...fields.email} />
                    <Field {...fields.password} />
                    <Field {...fields.confirmPassword} />
                </React.Fragment>
            )}
        />
    );
};