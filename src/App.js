import React from 'react';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Summary from './Components/Summary/summary';
import Experience from './Components/Experience/experience';
import Education from './Components/Education/education';
import Skills from './Components/Skills/skills';
import ContactMe from './Components/ContactMe/contactMe';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faFacebookSquare,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faPhoneAlt,faBook,faMusic} from '@fortawesome/free-solid-svg-icons';
library.add(faBook,faMusic,faFacebookSquare,faLinkedinIn,faInstagram,faEnvelope,faPhoneAlt);
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
