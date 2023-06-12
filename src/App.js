import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/navbar/NavBar';
import Project from './Components/Project/Project';
import Contact from './Components/contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
