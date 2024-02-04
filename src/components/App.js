import React from 'react';
import LandingPage from './LandingPage';
import '../styles/App.css';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <LandingPage />
      <NavBar />
      <Projects />
      <About />
      <Contact />
      <footer>Made by Martin Mui ©{currentYear}</footer>
    </div>
  );
};

export default App;
