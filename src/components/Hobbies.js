import React from "react";
import Hobby from "../data/hobby.json"
import '../styles/hobby.css'

export default function Hobbies(props){

    // trying to not hard code the hobbies here
    // information come from hobby.json

    const hobbiesData = Hobby.Hobbies

    
    return (
        <main className={props.darkMode ? "hobby dark": "hobby"} id="hobby">
            <h1 className={props.darkMode ?"title dark": "title"}>🎓 Hobbies</h1>
             {hobbiesData.map((hobb, hobbKey)=>{
                return (
                    <div key={hobbKey}>
                    <div id="hobby" className="element" >
                            <p className="subtile">- <b>{hobb}</b></p>
                        </div>
                    </div>
                )
             })}

            
        </main>
    )
}