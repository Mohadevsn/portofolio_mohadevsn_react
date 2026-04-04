import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

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

  const getActiveLabel = () => {
    switch(activeSection) {
      case 'hero': return '00. Accueil';
      case 'about': return '01. À propos';
      case 'skills': return '02. Compétences';
      case 'experience': return '03. Expérience';
      case 'education': return '04. Formation';
      case 'projects': return '05. Projets';
      case 'contact': return '06. Contact';
      default: return '00. Accueil';
    }
  };

  const handleLinkClick = () => {
    if(window.innerWidth <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="mobile-topbar">
        <div className="mobile-brand">
           <img src="/mohamed_profile.jpeg" alt="Mohamed Wade" className="mobile-avatar" />
           <span className="mobile-name">M. WADE</span>
        </div>
        <div className="mobile-controls">
           <span className="mobile-active-section">{getActiveLabel()}</span>
           <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✕' : '☰'}
           </button>
        </div>
      </div>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-avatar-container">
            <img src="/mohamed_profile.jpeg" alt="Mohamed Wade" className="sidebar-avatar" />
          </div>
          <h1 className="sidebar-name">MOHAMED WADE</h1>
          <p className="sidebar-role">Full-Stack Developer</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={handleLinkClick}>00. Accueil</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleLinkClick}>01. À propos</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleLinkClick}>02. Compétences</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={handleLinkClick}>03. Expérience</a></li>
            <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={handleLinkClick}>04. Formation</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleLinkClick}>05. Projets</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleLinkClick}>06. Contact</a></li>
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
    </>
  );
}
