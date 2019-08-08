import * as React from "react";
import {Form} from "../base/component/form/Form";
import {Field} from "../base/component/field/Field";
import {isEmail, maxLength, minLength, required} from "../base/component/form/Validator";
import {Fields} from "../base/component/form/Fields";
// import {required, isEmail, maxLength} from "../base/component/form/Validator";

export const SignUp: React.FunctionComponent = () => {
    const fields: Fields = {
        name: {
            id: "name",
            label: "Name",
            validation: [{rule: required}]
        },
        surname: {
            id: "surname",
            label: "Surname",
            validation: [{rule: required}]
        },
        email: {
            id: "email",
            label: "Email",
            validation: [{rule: isEmail}, {rule: required}, {rule: maxLength, args: 3}]
        },
        password: {
            id: "password",
            label: "Password",
            validation: [{rule: required}, {rule: minLength, args: 8}],
            type: "password"
        },
        confirmPassword: {
            id: "passwordConfirm",
            label: "Confirm Password",
            // validation: [{rule: required}],
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
                    <Field {...fields.surname} />
                    <Field {...fields.email} />
                    <Field {...fields.password} />
                    <Field {...fields.confirmPassword} />
                </React.Fragment>
            )}
        />
    );
};