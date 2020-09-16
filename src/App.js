import React from 'react';
import Top from './components/header/Top.js'
import About from './components/about/About.js'
import Projects from './components/recents/Projects.js'
import Whatsdo from './components/recents/Whatsdo.js'
import People from './components/depoiments/Peoples'
import Lettalk from './components/footer/Lettalk'
import Footer from './components/footer/Footer'

function App() {
  return (

    <div>
      <Top />
      <About />
      <Projects />
      <Whatsdo />
      <People />
      <Lettalk />
      <Footer />
    </div>
     

  );
}

export default App;
