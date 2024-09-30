import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';

import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
    console.log(darkMode)
  }

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


  return (
    <div className={darkMode? "mainDiv dark" : "mainDiv"}>
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
      <Contact
        darkMode={darkMode}

      />
      <Footer
        darkMode={darkMode}

      />
    </div>
  )
}

export default App;
