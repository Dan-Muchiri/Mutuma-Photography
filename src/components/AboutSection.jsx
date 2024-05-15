import React from 'react';

const AboutSection = () => {
  return (
    <section id='about-section' className="about-section">
      <div className="overlay"></div>
      <img className="background-image" src="public/background3.avif" alt="Background" />
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
          <li><a href="#featured-content">Portfolio</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="container">
        <h2>About Us</h2>
        <p>Welcome to Mutuma Photography! We are a team of passionate photographers dedicated to capturing your special moments. With years of experience, we specialize in various types of photography, including weddings, portraits, events, and more.</p>
        <p>Our mission is to provide you with high-quality, creative, and timeless photographs that you will cherish for a lifetime. Whether it's your wedding day, a family portrait, or a corporate event, we strive to exceed your expectations and deliver stunning images that tell your unique story.</p>
        <p>Contact us today to discuss your photography needs and let us help you capture memories that will last a lifetime.</p>
      </div>
    </section>
  );
};

export default AboutSection;
