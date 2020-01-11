import {FormState} from "./form";
import {Values} from "./values";

export interface Context extends FormState {
    /* Function that allows values in the values state to be set */
    setValues: (values: Values) => void;

    /* Function that validates a field */
    validate: (fieldName: string) => void;
}

