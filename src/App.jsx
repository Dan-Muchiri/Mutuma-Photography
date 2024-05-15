import React from 'react';

import HeroSection from './components/HeroSection';
import FeaturedContent from './components/FeaturedContent';
import AboutSection from './components/AboutSection';
import ContactDetails from './components/ContactDetails';

const App = () => {
  return (
    <div className="app">
      <main>
        <HeroSection />
        <FeaturedContent />
        <AboutSection />
        <ContactDetails/>
      </main>
    </div>
  );
};

export default App;
