import {Errors, Errors2} from "../component/error/Errors";

export interface Response {
    errors: Errors;
    errors2?: Array<Errors2>;
    message?: string;
}
