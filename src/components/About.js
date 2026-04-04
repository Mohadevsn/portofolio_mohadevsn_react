import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">À propos</h2>

      <div className="about-content">
        <p>
          Développeur full-stack passionné, je suis actuellement en Master Génie Logiciel à l'ESP Dakar.
          J'aime concevoir des architectures backend robustes et modernes, tout en créant des interfaces utilisateur élégantes et performantes.
        </p>
        <p>
          J'ai eu l'opportunité de travailler sur des applications variées, allant des microservices en NestJS aux applications mobiles React Native.
        </p>

        <div className="availability-badge">
          <span className="dot"></span>
          <span>Disponible pour missions / CDI</span>
        </div>
      </div>
    </section>
  );
}
