import React from "react";
import "../styles/Skill.css";
import { skillCategories } from "../data/skills";

export default function Skill() {


    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Compétences</h2>

            <div className="skills-categories">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="skill-category">
                        <h3 className="skill-category-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className={`skill-tag ${skill.accent ? 'accent' : ''}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}