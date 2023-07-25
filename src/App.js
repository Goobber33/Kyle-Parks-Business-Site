import React from 'react';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import NavigationBar from './components/NavBar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default App;
