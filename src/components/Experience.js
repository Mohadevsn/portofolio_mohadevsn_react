import React from "react";
import Experiences from "../data/experiences.json"
import '../styles/experience.css'

export default function Experience(props){

    // trying to not hard code the experience here
    // information come from experience.json

    const experiencesData = Experiences.Experiences 
    
    return (
        <main className={props.darkMode ? "experience dark" : "experience"} id="experiences">
            <h1 className={props.darkMode ? "title dark" : "title"}>🏢 Experiences</h1>
             {
                experiencesData.map((exp, expKey) => {
                    return(
                        <div  className="element" key={expKey}>
                            <p className="subtile">- <b>{exp.name}</b></p>
                            <p className="periode">{exp.periode}</p>
                            <div className="description">
                                <p>{exp.description}</p>
                            </div>
                            <div className="technologie--container">
                                {exp.technologie.map((tech, techIndex)=>{
                                    return (
                                        // <p key={techIndex} className={props.darkMode ? "technologie dark": "technologie"}>{tech}</p>
                                        <img key={techIndex} src={tech} alt="tech used"/>
                                )
                                })}
                            </div>
                            
                        </div>
                    )
                })
            }
            
        </main>
    )
}