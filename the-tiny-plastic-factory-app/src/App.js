import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import coverImg from "./imgs/tpf-cover.png";
import About from "./sections/About/About";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <img src={coverImg} className="cover-img" alt="cover-img" />
      <About />
    </div>
  );
};

export default App;
