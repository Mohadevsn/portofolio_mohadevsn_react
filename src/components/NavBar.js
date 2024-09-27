import React from "react";

export default function NavBar(){
    return(
       <nav className="navigator">
            <div className="name">
                <img src="./mohadevsn_logo.png" className="mohadevsnLogo" alt="logo MohaDevSn"/>
            </div>
            <div className="navigator--link">
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#experiences">Skills</a>
                <a href="#experiences">Experiences</a>
                <a href="#contact">Contact</a>
            </div>
       </nav>
        
        
    )
}