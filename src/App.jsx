import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer section-padding">
        <div className="container">
          <div className="footer-content">
            <p>© 2026 Sanny Olive. Tous droits réservés.</p>
            <div className="footer-links">
              <a href="https://github.com/olivesanny2006-a11y" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://wa.me/2290169547835">WhatsApp</a>
              <a href="mailto:olivesanny2006@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
