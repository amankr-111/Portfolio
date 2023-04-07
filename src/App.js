import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;
