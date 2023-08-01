import React from 'react';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import NavigationBar from './components/NavBar';
import Clients from './components/Clients';
import { Element } from 'react-scroll';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Clients />
      </Element>
      {/* Wrap other sections similarly with Element */}
    </div>
  );
}

export default App;
