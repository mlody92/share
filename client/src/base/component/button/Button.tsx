import * as React from "react";
import {ButtonProps} from "./ButtonProps";

export function Button(props: ButtonProps) {

    return (
        <button id={props.id} className={props.className} type="button">
            <span>
                {props.iconCls && <i className={props.iconCls}/> }
                {props.value}
            </span>
        </button>
    );
}