import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { SpeedInsights } from "@vercel/speed-insights/react";

import './App.css';
import './styles/common.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <Hero />
          <About />
          <Skill />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>
      <SpeedInsights />
    </div>
  );
}

export default App;
