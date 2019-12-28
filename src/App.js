import React from 'react';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Summary from './Components/Summary/summary';
import Experience from './Components/Experience/experience';
import Education from './Components/Education/education';
import Skills from './Components/Skills/skills';
import ContactMe from './Components/ContactMe/contactMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage />
      <Summary/>
      <Experience/>
      <Education/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}

export default App;
