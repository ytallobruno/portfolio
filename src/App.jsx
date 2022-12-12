import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
        <div className="App">
          <p>hello world</p>
        </div>
      </>
    );
  }
}
