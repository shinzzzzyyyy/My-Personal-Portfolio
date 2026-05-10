import React from "react";
import "./App.css";
import useCursor from "./components/useCursor";
import useReveal from "./components/useReveal";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Hobbies from "./components/Hobbies";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
function App() {
  useCursor();
  useReveal();
  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Hobbies />
      <Credentials />
      <Footer />
    </>
  );
}

export default App;