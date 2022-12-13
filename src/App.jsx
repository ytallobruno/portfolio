import React from "react";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <About/>
        <Experience/>
        <Portfolio/>
      </div>
    </>
  );
}
