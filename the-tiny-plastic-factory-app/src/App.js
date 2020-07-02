import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import coverImg from "./imgs/tpf-cover.png";
import AboutSection from "./sections/About/About";
import CollectionsSection from "./sections/Collections/Collections";
import SalesSection from "./sections/Sales/Sales";
import ContactSection from "./sections/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <img src={coverImg} className="cover-img" alt="cover-img" />
      <AboutSection />
      <CollectionsSection />
      <SalesSection />
      <div className="image-with-text-overlay">
        <h2>Enough.</h2>
      </div>
      <ContactSection />
    </div>
  );
};

export default App;
