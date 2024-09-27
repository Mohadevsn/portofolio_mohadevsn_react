import NavBar from './components/NavBar';
import Presentation from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skill from './components/Skill';
import React from 'react';

import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

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
    <div>
      <NavBar width={windowWidth}/>
      <Presentation/>
      <Skill/>
      <Education/>
      <Experience/>
    </div>
  )
}

export default App;
