import React from "react";

import '../App.css';


function AboutMe(){
    return <div className="aboutMe">
    <div className="leftSection">
        <h2>
            Hello, Its me 
        </h2>
        <h1>
            DHANANJAY 
        </h1>
        <div className="post">
        <h2>
            I'm a 
        </h2>
         <h2 className="mainPost">
             Frontend Developer
        </h2>
        </div>
        <p>
            i'm a web developer having expertise in frontend web development and overall i have 2 years of Professional experience
        </p>
       
    </div>
    <div className="rightSection">
        <div className="imgContainer">
            <img src={require('./dhananjaymain.jpeg')} alt="not found" className="img"></img>
        </div>
    </div>
    </div>
}


export default AboutMe;