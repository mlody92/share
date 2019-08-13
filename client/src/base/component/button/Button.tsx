import * as React from "react";

export interface ButtonProps {
    id?: string
    type: 'submit' | 'reset' | 'button'
    className?: string
    value?: string
    onClick?: (e: React.MouseEvent) => void
    iconCls?: string
    disabled: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <button id={props.id} type={props.type} className={props.className} onClick={props.onClick} disabled={props.disabled}>
            {props.iconCls ? (
                <span>
                    <i className={props.iconCls}/>
                    {props.value}
                </span>
            ) : (props.value)}
        </button>
    );
};

Button.defaultProps = {
    type: "button",
    disabled: false,
    className: "btn btn-primary btn-block"
};