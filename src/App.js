import React from "react";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import coverImg from "./imgs/tpf-cover.jpg";
import AboutSection from "./sections/About/About";
import CollectionsSection from "./sections/Collections/Collections";
import SalesSection from "./sections/Sales/Sales";
import ContactSection from "./sections/Contact/Contact";
import PartnersSection from "./sections/Partners/Partners";
import preciousplastic from "./imgs/partners/precious-plastic.png";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 1rem;
  color: white;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

const App = () => {
  return (
    <div className="App" id="top">
      <NavigationBar />

      <img src={coverImg} className="cover-img" alt="cover-img" />
      <AboutSection />
      <CollectionsSection />
      <SalesSection />
      <ContactSection />
      <PartnersSection />

      <Footer>
        <a
          href="https://preciousplastic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small>Inspired by Precious Plastic</small>
          <img
            src={preciousplastic}
            alt="Precious Plastic logo"
            height="30px"
          />
        </a>
      </Footer>
    </div>
  );
};

export default App;
