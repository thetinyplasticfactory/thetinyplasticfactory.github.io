import React from "react";
import "./styles.scss";
import logo from "../../imgs/tpf.png";
import SocialsBlock from "../SocialsBlock/SocialsBlock";

const NavigationBar = () => {
  return (
    <header className="nav">
      <div>
        <a href="#top" tabIndex={0}>
          <img
            src={logo}
            alt="tiny-plastic-factory-logo"
            className="nav-logo"
          />
        </a>
      </div>
      <div className="hide-on-mobile">
        <a className="nav-link" href="#about" tabIndex={0}>
          About
        </a>
        <a className="nav-link" href="#collections" tabIndex={0}>
          Collection
        </a>
        <a className="nav-link" href="#sales" tabIndex={0}>
          Sales
        </a>
        <a className="nav-link" href="https://tpf-store.web.app/" tabIndex={0}>
          Shop
        </a>
        <a
          className="nav-link"
          href="https://tpf-store.web.app/stewardship"
          tabIndex={0}
        >
          Stewardship
        </a>
        <a className="nav-link" href="#contact" tabIndex={0}>
          Contact
        </a>
        <a className="nav-link" href="#partners" tabIndex={0}>
          Partners
        </a>
      </div>
      <div className="nav-socials">
        <SocialsBlock />
      </div>
    </header>
  );
};

export default NavigationBar;
