import * as React from "react";

export interface ButtonProps {
    id?: string
    type: 'submit' | 'reset' | 'button'
    className?: string
    value?: string
    onClick?: (e: React.MouseEvent) => void
    iconCls?: string
}