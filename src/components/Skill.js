import React from "react";
import skillsData from "../data/skills.json"
import '../styles/skill.css'


export default function Skill(props){
    const data = skillsData.Skills

        return (
            <main className={props.darkMode ?"skill dark" : "skill"} id="skill">
                <h1 className={props.darkMode? "title dark" : "title"}>🥷🏾 Skills</h1>
             {data.map((skill)=>{
                return (
                <div >
                    <div className="element">
                        <p className="subtile">- <b>{skill.name}</b></p>
                        <div className="tools--container dark">
                                {skill.tools.map((tool, toolIndex) => {
                                    return (
                                        <p key={toolIndex} className={props.darkMode? "tools dark" : "tools"}> {tool} </p>
                                    )
                                })}
                        </div>    
                    </div>
                </div>
                )
             })}
            
            </main>
        )
}