import React from "react";
import Educations from "../data/education.json"
import '../styles/education.css'

export default function Education(props){

    // trying to not hard code the education here
    // information come from education.json

    const educationData = Educations.Educations 
    
    return (
        <main className={props.darkMode ? "education dark": "education"} id="education">
            <h1 className={props.darkMode ?"title dark": "title"}>🎓 Education</h1>
             {educationData.map((educ, eduKey)=>{
                return (
                    <div key={eduKey}>
                    <div className="element" >
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