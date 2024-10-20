import './App.css';
import AboutMe from './Components/AboutMe.js';
import Companies from './Components/Companies.js';
import ContactUs from './Components/ContactUs.js';
import Footer from './Components/Footer.js';
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
      <Companies/>
      <ContactUs/>
      <Footer/>
      
    </div>
  );
}

export default App;
