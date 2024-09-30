import React from "react";
import Educations from "../data/education.json"
import '../styles/education.css'

export default function Education(){

    // trying to not hard code the education here
    // information come from education.json

    const educationData = Educations.Educations 
    
    return (
        <main className="education">
            <h1 className="title">🎓 Education</h1>
             {educationData.map((educ)=>{
                return (
                    <div>
                    <div id="education" className="element">
                            <p className="subtile">- <b>{educ.name}</b></p>
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