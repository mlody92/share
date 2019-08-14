import {Errors} from "../component/error/Errors";

export interface Response {
    errors: Errors;
    message?: string;
}
