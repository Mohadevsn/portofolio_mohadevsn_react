import React from "react";
import "../styles/Experience.css";
import { experiences } from "../data/experiences";

export default function Experience() {

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Expérience</h2>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-marker">
              <span className="dot"></span>
              {idx !== experiences.length - 1 && <span className="line"></span>}
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">
                <span className="text-accent">{exp.title}</span> — {exp.company}
              </h3>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}