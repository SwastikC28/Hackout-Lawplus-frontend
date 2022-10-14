import React from 'react';
import Case from './Components/Case/Case';
import MainContainer from './Components/MainContainer/MainContainer';
import NavBar from './Components/Navbar/Navbar';
import SideBar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <>
      {/* <h1>Hackout</h1> */}
      <NavBar/>
      <MainContainer/>
      <Case/>
    </>
  );
}

export default App;
