import React from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AboutSection from './sections/About/About';
import ContactSection from './sections/Contact/Contact';
import HeroSection from './sections/Hero/Hero';

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
