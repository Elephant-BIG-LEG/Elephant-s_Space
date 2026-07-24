import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </div>
  );
}

export default App;
