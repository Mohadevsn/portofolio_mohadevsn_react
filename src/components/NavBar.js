import React from "react";

export default function NavBar(props){
    const width = props.width


    let logoSize = "large"
    if(width <= 600){
        logoSize = "small"
    }

    return(
       <nav className="navigator">
            <a href="#about">
                <div className="name">
                    { logoSize === "large" && <img src="./mohadevsn-logo-large.png" className="mohadevsnLogoLarge" alt="logo MohaDevSn"/>}
                    {logoSize === "small" && <img src="./mohadevsn-logo-small.png" className="mohadevsnLogoSmall" alt="logo MohaDevSn"/>}
                </div>
            </a>
            <div className="navigator--link">
                <a href="#skill">Skills</a>
                <a href="#education">Education</a>
                <a href="#experiences">Experiences</a>
                <a href="#contact">Contact</a>
            </div>
       </nav>
        
        
    )
}