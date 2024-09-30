import React from "react";
import '../styles/navbar.css'

export default function NavBar(props){
    const width = props.width

    let darkMode = props.darkMode
    let logoSize = "large"
    if(width <= 600){
        logoSize = "small"
    }


    return(
       <nav className={darkMode ? "navigator dark" : "navigator "} id="navigator">
            <a href="#about">
                <div className="name">
                    { (logoSize === "large" && !darkMode) && <img src="./mohadevsn-logo-large.png" className="mohadevsnLogoLarge" alt="logo MohaDevSn"/>}
                    {(logoSize === "small" && !darkMode) && <img src="./mohadevsn-logo-small.png" className="mohadevsnLogoSmall" alt="logo MohaDevSn"/>}

                    { (logoSize === "large" && darkMode) && <img src="./mohadevsn-logo-large-dark.png" className="mohadevsnLogoLarge" alt="logo MohaDevSn dark"/>}
                    {(logoSize === "small" && darkMode) && <img src="./mohadevsn-logo-small-dark.png" className="mohadevsnLogoSmall" alt="logo MohaDevSn dark"/>}
                </div>
            </a>
            <div className={darkMode ? "navigator--link dark" : "navigator--link"}>
                <a href="#skill">Skills</a>
                <a href="#education">Education</a>
                <a href="#experiences">Experiences</a>
                <a href="#contact">Contact</a>
                <img src={darkMode ? "/dark-icon.png" : "/light-icon.png"} className="toggleModeIcon" onClick={props.toggleDarkMode} alt="mode toggle"/>
            </div>
       </nav>
        
        
    )
}