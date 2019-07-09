import {Values} from "./Values";
import {Errors} from "./Errors";

export interface FormState {
    /* The field values */
    values: Values;

    /* The field validation error messages */
    errors: Errors;

    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
}
