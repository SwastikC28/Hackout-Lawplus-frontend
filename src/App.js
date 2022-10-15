import React from 'react';
import Case from './Components/Case/Case';
import MainContainer from './Components/MainContainer/MainContainer';
import NavBar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Case />
    </div>
  );
}

export default App;
