import {ComponentProps} from "../ComponentProps";

export interface DropdownProps extends ComponentProps {
    /* The drop down items for the field */
    options?: Array<string>;
}