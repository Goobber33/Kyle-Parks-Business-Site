import React from 'react';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import NavigationBar from './components/NavBar';
import Clients from './components/Clients';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <AboutMe />
      <Clients />
    </div>
  );
}

export default App;
