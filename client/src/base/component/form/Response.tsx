import {Errors} from "./Errors";

export interface Response {
    errors: Errors;
    message?: string;
}
