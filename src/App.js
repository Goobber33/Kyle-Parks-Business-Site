import React from 'react';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import './styles/App.sass';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default App;
