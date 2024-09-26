import logo from './logo.svg';
import NavBar from './components/NavBar';
import Presentation from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Presentation/>
      <Experience/>
    </div>
  )
}

export default App;
