import logo from './logo.svg';
import NavBar from './components/NavBar';
import Presentation from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Presentation/>
      <Education/>
      <Experience/>
    </div>
  )
}

export default App;
