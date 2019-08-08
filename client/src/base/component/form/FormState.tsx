import {Values} from "./Values";
import {Response} from "./Response";

export interface FormState {
    /* The field values */
    values: Values;

    /* The field validation error messages */
    response: Response;

    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
}
