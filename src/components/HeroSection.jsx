import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Mutuma Photography</h1>
        <p>Where every moment is captured beautifully</p>
        <button>Contact Us</button>
      </div>
      <div className="overlay"></div>
      <img className="background-image" src="public/background.avif" alt="Background" />
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="arrow"></div>
      </div>
      <div className="logo">
        <span className="website-name">Mutuma Photography</span>
        <img src="public/camera icon.jpg" alt="Logo" />
      </div>
      <nav className="hero-navigation">
        <ul>
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="testimonials">
        <p>"Absolutely stunning photography. Highly recommended!"</p>
        <p>- John Doe, Happy Customer</p>
      </div>
    </section>
  );
};

export default HeroSection;
