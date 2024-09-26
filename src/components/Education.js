import React from "react";
import Educations from "../data/education.json"

export default function Education(){

    // trying to not hard code the education here
    // information come from education.json

    const educationData = Educations.Educations 
    console.log(educationData)
    
    return (
        <main className="education">
            <h1 className="title">Education</h1>
             {educationData.map((educ)=>{
                return (
                    <div>
                    <div className="element">
                            <p className="subtile">- {educ.name}</p>
                            <p className="periode">{educ.periode}</p>
                            <div className="description">
                                <p>{educ.description}</p>
                            </div>
                        </div>
                    </div>
                )
             })}
            
        </main>
    )
}