import React from "react";
import '../styles/about.css'

export default function About(props){

    return (
        <main className={props.darkMode ? "presentation--container dark" : "presentation--container"} id="about">
            <div>
                <p className="presention--title">
                    Hello I'm Mohamed WADE <br/> <span className="roleTitle">Computer Science Student & Tech Enthusiast </span>
                </p>
                <p className="presentation--description">
                I am a passionate Computer Science Student at <a href="https://esp.sn/" target="blank" className="school--link"><br/>
                <b> Polytechnic School of Dakar ESP</b></a> <b>📍 Senegal</b> 🇸🇳 with a <span className="red">deep love</span> for all things tech. <br/>
                My journey with computers began in childhood, and I have since explored various areas of computer science. <br/>
                I specialize in both <b>web development 🌐</b>, <b>System and Networks 🛜</b>and general <b>software development 👨🏿‍💻</b>.
                I enjoy tackling complex problems and continuously expanding my knowledge in the ever-evolving world of technology.
                </p>
            </div>
            <div className="profile--image">
                <img src="/mohamed_profile.jpeg" alt="profile" className="profile--me"/>
            </div>
        </main>
    )
}