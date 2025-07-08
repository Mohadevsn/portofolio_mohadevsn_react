import React from "react";
import Experiences from "../data/experiences.json"
import '../styles/experience.css'

export default function Experience(props){

    const experiencesData = Experiences.Experiences 
    
    return (
        <main className={props.darkMode ? "section dark" : "section"} id="experiences">
            <h1 className={props.darkMode ? "title dark" : "title"}>🏢 Experiences</h1>
             {
                experiencesData.map((exp, expKey) => {
                    return(
                        <div  className="card" key={expKey}>
                            <p className="subtitle">- <b>{exp.name}</b></p>
                            <p className="periode">{exp.periode}</p>
                            <div className="description">
                                <p>{exp.description}</p>
                            </div>
                            <div className="technologie--container">
                                {exp.technologie.map((tech, techIndex)=>{
                                    return (
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