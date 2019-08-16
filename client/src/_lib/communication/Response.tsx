import {Errors} from "../component/error/Errors";

export interface Response {
    errors?: Array<Errors>;
    message?: string;
    success: boolean;
}
