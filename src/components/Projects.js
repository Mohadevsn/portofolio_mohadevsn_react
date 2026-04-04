import React from "react";
import projectsData from "../data/projects.json";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projets</h2>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.githubLink && project.gitAvailable && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link outline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
