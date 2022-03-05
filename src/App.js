import React from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { AboutSection, ContactSection, HeroSection } from './sections';

const App = () => {
  return (
    <div className="App" id="top">
      <NavigationBar />

      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default App;
