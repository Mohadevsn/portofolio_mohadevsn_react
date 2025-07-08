import React from "react";
import skillsData from "../data/skills.json"
import '../styles/skill.css'

export default function Skill(props){
    const data = skillsData.Skills
    return (
        <main className={props.darkMode ?"section dark" : "section"} id="skill">
            <h1 className={props.darkMode? "title dark" : "title"}>🥷🏾 Skills</h1>
         {data.map((skill, skillKey)=>{
            return (
            <div key={skillKey} className="card">
                <p className="subtitle">- <b>{skill.name}</b></p>
                <div className="tools--container dark">
                        {skill.tools.map((tool, toolIndex) => {
                            return (
                                <img key={toolIndex} src={tool} alt="skill icon"/>
                            )
                        })}
                </div>    
            </div>
            )
         })}
        </main>
    )
}