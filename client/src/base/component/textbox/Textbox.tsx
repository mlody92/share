import * as React from "react";
import {TextboxProps} from "./TextboxProps";


export function Textbox(props: TextboxProps) {
    return (
        <input
            id={props.id}
            type="text"
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            className="form-control"
            style={props.style}
        />
    );
}


// export const Textbox = ({id, value, style}: TextboxProps) => {
//     const onChange = (context: FormContext) => (e: React.FormEvent<HTMLInputElement>) => {
//         context.setValues({[id]: e.currentTarget.value})
//     };
//
//     const onBlur = (context: FormContext) => (e: React.FormEvent<HTMLInputElement>) => {
//         context.validate(id)
//     };
//     const getError = (errors: Errors): string => (errors ? errors[id] : "");
//     return (
//         <FormCtx.Consumer>
//             {(context: FormContext) => (
//                 <>
//                     <input
//                         id={id}
//                         type="text"
//                         value={value}
//                         onChange={onChange(context)}
//                         onBlur={onBlur(context)}
//                         className="form-control"
//                         style={style}
//                     />
//                     {getError(context.errors) && (
//                         <div style={{color: "red", fontSize: "80%"}}>
//                             <p>{getError(context.errors)}</p>
//                         </div>
//                     )}
//                 </>
//             )}
//         </FormCtx.Consumer>
//     );
// };


