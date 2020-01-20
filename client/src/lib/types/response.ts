import {Errors} from "./component";

export type Response = {
    errors?: Array<Errors>;
    message?: string;
    success: boolean;
    token?: string;
}
