import React from 'react';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import NavigationBar from './components/NavBar';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import './styles/App.scss';

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
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
