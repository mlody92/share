import {Map} from "./Map";

export interface Response {
    errors: Map<string>;
    message?: string;
}
