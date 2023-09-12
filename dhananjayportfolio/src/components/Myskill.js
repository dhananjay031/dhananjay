import React from "react";

import '../App.css';

function Myskills(){
    return <div className="skillContainer">
        <div className="mySkills">
         <h1>My</h1>
         <h1 className="skill">Skills</h1>
        </div>
        <div className="skillButtons">
            <div className="button"><span>Technical Skills</span></div>
            <div className="button"><span>Other Skills</span></div>
        </div>
    </div>
}


export default Myskills;