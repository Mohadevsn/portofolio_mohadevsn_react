import React from "react";
import Hobby from "../data/hobby.json"
import '../styles/hobby.css'

export default function Hobbies(props){

    const hobbiesData = Hobby.Hobbies

    return (
        <main className={props.darkMode ? "section dark": "section"} id="hobby">
            <h1 className={props.darkMode ?"title dark": "title"}>🎲 Hobbies</h1>
             {hobbiesData.map((hobb, hobbKey)=>{
                return (
                    <div key={hobbKey} className="card">
                        <p className="subtitle">- <b>{hobb}</b></p>
                    </div>
                )
             })}
        </main>
    )
}