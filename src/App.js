import './App.css';
import AboutMe from './Components/AboutMe.js';
import Home from './Components/Home.js';
import NavBar from './Components/NavBar.js';
import Portfolio from './Components/Portfolio.js';
import Skills from './Components/Skills.js';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
