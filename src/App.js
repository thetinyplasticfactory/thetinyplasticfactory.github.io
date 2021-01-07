import React from "react";
import styled from "styled-components";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import coverImg from "./imgs/hero.png";
import AboutSection from "./sections/About/About";
import CollectionsSection from "./sections/Collections/Collections";
import SalesSection from "./sections/Sales/Sales";
import ContactSection from "./sections/Contact/Contact";
import PartnersSection from "./sections/Partners/Partners";
import SocialsBlock from "./components/SocialsBlock/SocialsBlock";

const AboveTheFold = styled.section`
  display: flex;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 0 6rem;
  margin: 3rem auto 3rem;
  align-items: center;
  gap: 3rem;
`;

const HeroText = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  margin: 0;
  font-weight: 900;
  letter-spacing: -4px;
  color: #3e9a6e;
`;

const HeroBlurb = styled.h2`
  margin: 0.5rem 0 0;
`;
const Left = styled.div`
  flex: 1 0 calc(40% - 3rem);
`;

const HeroImage = styled.img`
  display: block;
`;

const App = () => {
  return (
    <div className="App" id="top">
      <NavigationBar />

      <main>
        <AboveTheFold>
          <Left>
            <HeroText>The Tiny Plastic Factory</HeroText>
            <HeroBlurb>Plastic Recycling, Reinvented.</HeroBlurb>
            <SocialsBlock />
          </Left>
          <HeroImage src={coverImg} alt="Hero image" role="presentation" />
        </AboveTheFold>
        <AboutSection />
        <CollectionsSection />
        <SalesSection />
        <ContactSection />
        <PartnersSection />
      </main>
    </div>
  );
};

export default App;
