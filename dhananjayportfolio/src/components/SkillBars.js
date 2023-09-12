import React,{useState,useEffect}from "react";

import {BiLogoReact}  from "react-icons/bi";
import {BiLogoJavascript} from "react-icons/bi";
import {BiLogoHtml5} from "react-icons/bi";
import {BiLogoTailwindCss} from "react-icons/bi";


import '../App.css';

function SkillBars(){
   
    useEffect(()=>{
      setInterval(()=>{
        setSkill((prev)=>{
            return prev+1;
        })
      },30)
    },[])
 
    const [skill,setSkill] = useState(0);
    
    return <div className="skillsBarContainer">
       <div className="technicalBarContainer">
        <div className="bar">  
          <BiLogoReact/> 
          <span>React</span> 
          <div className="bar1">
            <div className="common barType1" style={{
                width:`${skill}%`,
            }}>
            </div>
          </div>
        </div>
        <div className="bar">
            <BiLogoJavascript className=""/>
            <span> js </span>
          <div className="bar1">
            <div className="common barType2" style={{
                width:`${skill}%`,
            }}>
            </div>
          </div>
        </div>
        <div className="bar">
           <BiLogoTailwindCss/>
            <span> Css </span>
          <div className="bar1">
            <div className="common barType2" style={{
                width:`${skill}%`,
            }}>
            </div>
          </div>
        </div>
        <div className="bar">
           <BiLogoHtml5/>
            <span> html </span>
          <div className="bar1">
            <div className="common barType2" style={{
                width:`${skill}%`,
            }}>
            </div>
          </div>
        </div>
        <div className="bar">
            <BiLogoJavascript/>
            <span> nextJs </span>
          <div className="bar1">
            <div className="common barType3" style={{
                width:`${skill}%`,
            }}>
            </div>
          </div>
        </div>
    </div>
    <div className="others">
       <div className="percent">
       <div className="com"><span>80%</span></div>
       <div className="com ml-11"><span>80%</span></div>
       </div>
       <div className="name mt-1">
       <h3>Communication</h3>
       <h3>Creativity</h3>
       </div>
     
    </div>
    </div>
    
}

export default SkillBars;