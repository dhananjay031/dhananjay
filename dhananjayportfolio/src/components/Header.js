import React from 'react';

import '../App.css';

function Header(){
    return <div className='header'>
        <div className='main'><h1>Portfolio.</h1></div>
        <div className='sub'>
            <h3>
                Home
            </h3>
            <h3>
               About
            </h3>
            <h3>
                Skills
            </h3>
            <h3>
                Project
            </h3>
            <h3>
                Contact
            </h3>
           
        </div>
    </div>
}

export default Header;