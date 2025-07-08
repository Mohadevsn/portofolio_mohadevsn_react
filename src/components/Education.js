import React from "react";
import Educations from "../data/education.json"
import '../styles/education.css'

export default function Education(props){

    const educationData = Educations.Educations 
    
    return (
        <main className={props.darkMode ? "section dark": "section"} id="education">
            <h1 className={props.darkMode ?"title dark": "title"}>🎓 Education</h1>
             {educationData.map((educ, eduKey)=>{
                return (
                    <div key={eduKey} className="card">
                        <p className="subtitle">- <b>{educ.name}</b></p>
                        <p className="periode">{educ.periode}</p>
                        <div className="description">
                            <p>{educ.description}</p>
                        </div>
                    </div>
                )
             })}
        </main>
    )
}