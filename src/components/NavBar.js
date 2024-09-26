import React from "react";

export default function NavBar(){
    return(
       <nav className="navigator">
            <div className="name">
                <h2>Mohamed WADE</h2>
            </div>
            <div className="navigator--link">
                <a href="#about">About</a>
                <a href="#experiences">Experiences</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div>
       </nav>
        
        
    )
}