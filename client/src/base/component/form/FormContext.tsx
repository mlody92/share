import {FormState} from "./FormPS";
import {Values} from "./Values";

export interface FormContext extends FormState {
    /* Function that allows values in the values state to be set */
    setValues: (values: Values) => void;

    /* Function that validates a field */
    validate: (fieldName: string) => void;
}

