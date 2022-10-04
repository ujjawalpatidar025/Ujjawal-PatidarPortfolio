import React from 'react';
import "./App.css";
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Qualification from './components/Qualification/Qualification.jsx'
import Skills from './components/Skills/Skills.jsx'
import Event_card from './components/eventCard/EventCard.jsx'
import Contact from './components/Contact us/Contact.jsx'


function App() {

  
  return (
    <div className="app">
    <Navbar/>
      <Home/>
      <About/>
      <Qualification/>
      <Skills/>
      <Event_card/>
      <Contact/>
      
      
    </div>
  );
}

export default App;