import React from "react";
import "./styles.scss";
import logo from "../../imgs/tpf.png";
import SocialsBlock from "../SocialsBlock/SocialsBlock";

const NavigationBar = () => {
  return (
    <header className="nav">
      <div>
        <a href="#top">
          <img
            src={logo}
            alt="tiny-plastic-factory-logo"
            className="nav-logo"
          />
        </a>
      </div>
      <div>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#collections">
          Collection
        </a>
        <a className="nav-link" href="#sales">
          Sales
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </div>
      <div className="nav-socials">
        <SocialsBlock />
      </div>
    </header>
  );
};

export default NavigationBar;
