import React from "react";
import "../styles/Contact.css";
import { contact } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-content">
        <h3 className="contact-hook">Construisons quelque chose ensemble.</h3>
        <p className="contact-text">
          Je suis actuellement à la recherche de nouvelles opportunités.
          Que vous ayez une question, un projet ou que vous souhaitiez simplement dire bonjour,
          je ferai de mon mieux pour vous répondre !
        </p>

        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="btn btn-primary contact-btn">
            M'envoyer un e-mail
          </a>
        </div>

        <div className="contact-socials">
          <a href={`${contact.github}`} target="_blank" rel="noreferrer" className="social-link">
            GitHub
          </a>
          <span className="divider">/</span>
          <a href={`${contact.linkedin}`} target="_blank" rel="noreferrer" className="social-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}