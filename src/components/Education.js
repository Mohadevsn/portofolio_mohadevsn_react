import React from "react";
import "../styles/Education.css";
import { educations } from "../data/education";

export default function Education() {

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Formation</h2>

      <div className="education-grid">
        {educations.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="education-year">{edu.year}</div>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-school">{edu.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}