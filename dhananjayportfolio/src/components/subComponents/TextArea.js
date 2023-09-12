import React from "react";
import { Input as RawInput } from "antd";

import '../../App.css';

const {TextArea:Textarea} = RawInput;

function TextArea({label,...rest}){
  return<div>
    <span>
     {label}
    </span>
    <Textarea/>
  </div>
}

export default TextArea;