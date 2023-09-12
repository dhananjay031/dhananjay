import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

import '../../App.css';

function Form(){
    return <div className="form">
        <Input label='Name' placeholder = 'Enter Name'/>
        <Input label='Phone' placeholder = 'Enter Phone'/>
        <Input label='Email' placeholder = 'Enter Email'/>
        <TextArea  label='Message'/>
    </div>
}

export default Form;