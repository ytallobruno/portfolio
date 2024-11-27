import React from "react";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </div>
    </>
  );
}
