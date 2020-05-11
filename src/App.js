import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <div style={{textAlign : "center"}}>
        <Intro/>
      </div>

    </div>
  );
}

export default App;
