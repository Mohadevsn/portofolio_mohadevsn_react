import React from "react";
import "../styles/about.css";

export default function About(props) {
  return (
    <section
      className={props.darkMode ? "about-card dark" : "about-card"}
      id="about"
    >
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">
            Hello, I'm Mohamed WADE <br />
            <span className="about-role">
            CS Student & Software Developer 
            </span>
          </h1>
          <p className="about-description">
            I’m a Computer Science student with a strong interest in full-stack
            development, clean architecture, and building real-world solutions
            that solve real problems. <br/>
            Beyond school, I’m passionate about Linux
            systems, networking, and homelab projects — always exploring how to
            make systems more efficient, scalable, and secure. <br/>
            I love
            collaborating on projects where I can write maintainable code, learn
            from feedback, and ship features that matter. 
          </p>
        </div>
        <div className="about-image-wrapper">
          <img
            src="/mohamed_profile.png"
            alt="profile"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}
