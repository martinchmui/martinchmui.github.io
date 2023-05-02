import React from 'react';
import LandingPage from './LandingPage';
import '../styles/App.css';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <div className="container">
      <LandingPage />
      <NavBar />
      <Projects />
      <About />
      <Contact />
      <footer>Made by Martin Mui ©2023</footer>
    </div>
  );
};

export default App;
