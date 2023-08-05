import React from "react"
interface ButtonProps {
    title: string;
    class: string;
    handleClick: Function;
}
export function Button(props:ButtonProps){
    return(
        <button
            className={props.class}
            type="button"
            onClick={() => props.handleClick()}
        >
        {props.title}
        </button>
    )
}