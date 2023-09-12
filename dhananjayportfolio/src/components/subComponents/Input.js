import React from "react";
import { Input as RawInput} from "antd";

import '../../App.css';

function Input({label,...rest}){
    return <div className="inputContainer">
        <span>{label}</span>
        <RawInput className="input" {...rest}/>
    </div>
}


export default Input;