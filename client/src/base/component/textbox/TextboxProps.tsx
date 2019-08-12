import {ComponentProps} from "../ComponentProps";

export interface TextboxProps extends ComponentProps {
    type: string;
    placeholder?: string;
    autoFocus?: boolean;
}
