import React from "react";
import skillsData from "../data/skills.json"


export default function Skill(){
    const data = skillsData.Skills
    
        return (
            <main className="skill" id="skill">
                <h1 className="title">🥷🏾 Skills</h1>
             {data.map((skill)=>{
                return (
                <div >
                    <div className="element">
                        <p className="subtile">- <b>{skill.name}</b></p>
                        <div className="tools--container">
                                {skill.tools.map((tool, toolIndex) => {
                                    return (
                                        <p key={toolIndex} className="tools"> {tool} </p>
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