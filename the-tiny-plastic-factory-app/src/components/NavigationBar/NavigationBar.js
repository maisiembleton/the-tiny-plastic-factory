import React from "react";
import "./styles.scss";

//TODO: include socials
const NavigationBar = () => {
  return (
    <header className="nav">
      <a className="nav-link" href="#about">
        About
      </a>
      <a className="nav-link" href="#collection">
        Collection
      </a>
      <a className="nav-link" href="#sales">
        Sales
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
    </header>
  );
};

export default NavigationBar;
