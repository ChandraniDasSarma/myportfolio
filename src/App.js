import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Navbarr from "./components/navbarr";
import Skills from "./components/Skills";
import Socials from "./components/socials";



function App() {
  return (
    <div>
      <Navbarr />
      <Home />
      <About />
      <Skills />
      <Socials/>
    </div>
  );
}

export default App;
