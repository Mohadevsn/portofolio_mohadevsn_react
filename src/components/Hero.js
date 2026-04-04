import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer_";

  useEffect(() => {
    let currentIndex = 0;
    // Simple typing effect
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // 100ms per character

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {text}
          <span className="cursor-blink"></span>
        </h1>
        <p className="hero-subtitle">NestJS · React · Spring Boot · Dakar, SN</p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">[Voir mes projets]</a>
          <a href="/cv-mohamed-wade.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary" download>[Télécharger CV]</a>
        </div>
      </div>
    </section>
  );
}
