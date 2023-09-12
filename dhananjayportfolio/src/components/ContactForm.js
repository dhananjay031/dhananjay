import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import {BiLogoWhatsapp}  from "react-icons/bi";

import '../App.css';
import Form from "./subComponents/Form";

function ContactForm(){
    return <div className="formContainer">
      <div className="formleftSection">
        <h1>Connect With Me</h1>
        <div className="iconContainer">
          <BiLogoLinkedin className="icon1  cursor-pointer"/>
          <BiLogoWhatsapp className="icon2  cursor-pointer"/>
        </div>
      </div>
      <div className="formrightSection">
        <div className="form">
           <Form/>
        </div>
      </div>
    </div>
}


export default ContactForm;