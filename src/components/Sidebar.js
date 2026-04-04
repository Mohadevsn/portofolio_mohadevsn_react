import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Selection of all sections in the DOM
    const sections = document.querySelectorAll('section');

    // Intersection observer to track which section is currently active
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-avatar-container">
          <img src="/mohamed_profile.jpeg" alt="Mohamed Wade" className="sidebar-avatar" />
        </div>
        <h1 className="sidebar-name">MOHAMED WADE</h1>
        <p className="sidebar-role">Full-Stack Developer</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>00. Accueil</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>01. À propos</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>02. Compétences</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>03. Expérience</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>04. Formation</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>05. Projets</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>06. Contact</a></li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <a href="mailto:mohawade23@gmail.com" className="sidebar-email">mohawade23@gmail.com</a>
        <div className="sidebar-socials">
          <a href="https://github.com/Mohadevsn" target="_blank" rel="noreferrer">GitHub</a>
          <span className="dot">•</span>
          <a href="https://www.linkedin.com/in/mohamedwade/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </aside>
  );
}
