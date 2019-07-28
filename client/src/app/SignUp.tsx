import * as React from "react";
import {Form} from "../base/component/form/Form";
import {Field} from "../base/component/field/Field";
import {Fields} from "../base/component/form/Fields";
import {required, isEmail} from "../base/component/form/Validator";
// import {required, isEmail, maxLength} from "../base/component/form/Validator";

export const SignUp: React.FunctionComponent = () => {
    const fields: Fields = {
        name: {
            id: "name",
            label: "Name",
            validation: {rule: required}
        },
        surname: {
            id: "surname",
            label: "Surname",
            validation: {rule: required}
        },
        email: {
            id: "email",
            label: "Email",
            validation: {rule: isEmail}
        },
        password: {
            id: "password",
            label: "Password",
            validation: {rule: required},
            type: "password"
        }
        /*,
        reason: {
            id: "reason",
            label: "Reason",
            editor: "dropdown",
            options: ["", "Marketing", "Support", "Feedback", "Jobs"],
            validation: {rule: required}
        },
        notes: {
            id: "notes",
            label: "Notes",
            editor: "multilinetextbox",
            validation: {rule: maxLength, args: 1000}
        }*/
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
                    {/*<Field {...fields.reason} />*/}
                    {/*<Field {...fields.notes} />*/}
                </React.Fragment>
            )}
        />
    );
};