import React from "react";

import '../App.css';
import AboutMe from "./Aboutme";
import Myskills from './Myskill';
import SkillBars from "./SkillBars";
import ContactForm from './ContactForm';

function Body(){
  return <div className="body"> 
   <AboutMe/>
   <Myskills/>
   <SkillBars/>
   <ContactForm/>
  </div>
}


export default Body;