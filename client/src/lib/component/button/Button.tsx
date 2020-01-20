import * as React from "react";

export type ButtonProps = {
    id?: string
    type?: 'submit' | 'reset' | 'button'
    className?: string
    value?: string
    onClick?: (e: React.MouseEvent) => void
    iconCls?: string
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    const { type = 'button', disabled = false, className = 'btn btn-primary btn-block', iconCls, id, onClick, value } = props;
    return (
        <button id={id} type={type} className={className} onClick={onClick} disabled={disabled}>
            {iconCls ? (
                <span>
                    <i className={props.iconCls}/>
                    {value}
                </span>
            ) : (value)}
        </button>
    );
};
