/* The available editors for the field */
import {Validation} from "../form/Validation";

type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface FieldProps {
    /* The unique field name */
    id: string;

    /* The label text for the field */
    label?: string;

    /* The editor for the field */
    editor?: Editor;

    /* The drop down items for the field */
    options?: Array<string>;

    /* The field value */
    value?: any;

    validation?: Array<Validation>;
    type?: string;
    placeholder?:string;
    autoFocus?: boolean
}