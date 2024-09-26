import React from "react";
import Experiences from "../data/experiences.json"

export default function Experience(){

    // trying to not hard code the experience here
    // information come from experience.json

    const experiencesData = Experiences.Experiences 
    
    return (
        <main className="experience">
            <h1 className="title">Experiences</h1>
             {
                experiencesData.map((exp) => {
                    return(
                        <div className="element">
                            <p className="subtile">- {exp.Name}</p>
                            <p className="periode">{exp.periode}</p>
                            <div className="description">
                                <p>{exp.description}</p>
                            </div>
                            <div className="technologie--container">
                                {exp.technologie.map((tech, techIndex)=>{
                                    return (
                                        <p key={techIndex} className="technologie">{tech}</p>
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