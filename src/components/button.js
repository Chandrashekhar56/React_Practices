import React from "react";

const Button = (props)=>{
    const {label,buttonStyle} = props|| {}
    return <button onClick={props.onClick} style={{backgroundColor:'red',padding:10,width:200, ...buttonStyle}}>{label}</button>
}
export default Button;