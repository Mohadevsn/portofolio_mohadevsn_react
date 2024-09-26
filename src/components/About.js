import React from "react";

export default function About(){
    return (
        <main className="presentation--container">
            <div>
                <p className="presention--title">
                    Hello I'm Mohamed WADE.<br/>I am Computer Science student at
                    <a href="https://esp.sn/" target="blank" className="school--link"><br/>
                    <b> Polytechnic School of Dakar ESP</b></a>
                </p>
                <p className="presentation--description">
                I am a passionate Computer Science Student based in <b>📍 Dakar,Senegal</b> 🇸🇳 with a <span className="red">deep love</span> for all things tech. <br/>
                My journey with computers began in childhood, and I have since explored various areas of development. <br/>
                I specialize in both <b>web development</b> and general <b>software development</b>, <br/>with experience in languages such as Java, C, and Python. <br/>
                I enjoy tackling complex problems and continuously expanding my knowledge in the ever-evolving world of technology.
                </p>
            </div>
            <div className="profile--image">
                <img src="/profile_avatar.jpeg" alt="profile"/>
            </div>
        </main>
    )
}