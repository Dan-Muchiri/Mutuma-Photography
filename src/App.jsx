import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedContent from './components/FeaturedContent';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <main>
        <HeroSection />
        <FeaturedContent />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
