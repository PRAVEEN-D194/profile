import React from 'react';
import './App.css';
import CustomCursor from './component/CustomCursor';
import Navibar from './component/navibar';
import About from './component/about';
import Skills from './component/skills';
import Project from './component/project';
import Certificate from './component/certificate';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navibar />
      <About />
      <Skills />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
