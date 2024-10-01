import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"

import './App.css';
import Hobbies from './components/Hobbies';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  // initialize the theme to match the color scheme of the browser or device
  const [darkMode, setDarkMode] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches)


  if (darkMode) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
  
  // toggle function
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
      if (newDarkMode) {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "white";
      }
      return newDarkMode;
    });
  }

  // listenning for windows resizing

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 

  //  listenning for theme preference change

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);


  return (
    <div className={darkMode? "mainDiv dark" : "mainDiv"} id='scafold'>

      <NavBar 
        width={windowWidth}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <About
        darkMode={darkMode}

      />
      <Skill
        darkMode={darkMode}

      />
      <Education
        darkMode={darkMode}

      />
      <Experience
        darkMode={darkMode}

      />
      <Hobbies
        darkMode={darkMode}
      />
      <Contact
        darkMode={darkMode}

      />
      <Footer
        darkMode={darkMode}

      />
      <SpeedInsights/>
    </div>
  )
}

export default App;
