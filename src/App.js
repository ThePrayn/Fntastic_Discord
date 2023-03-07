import React from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Servers from "./components/Servers";
import ServerSection from "./components/ServerSection";
import './Style/main.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='page-container'>
      <Servers/>
      <div className="server-section">
      <ServerSection/>
      <Profile/>
      </div>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
