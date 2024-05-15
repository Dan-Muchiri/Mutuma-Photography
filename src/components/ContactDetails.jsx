import React from 'react';

const ContactDetails = () => {
  return (
    <section id="contact" className="contact-details">
      <div className="contact-overlay"></div>
      <img className="contact-background-image" src="public/background4.avif" alt="Background" />
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
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+254741434775">+254741434775</a>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:mutumaphotography@gmail.com">mutumaphotography@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/mutuma_photography?igsh=Y3YxdGF1OXNxa2h4" target="_blank" rel="noopener noreferrer">@mutuma_photography</a>
          </div>
          <div className="contact-item">
            <h3>TikTok</h3>
            <a href="https://www.tiktok.com/@mutuma_photography?_t=8mNZnZUaqs1&_r=1" target="_blank" rel="noopener noreferrer">@mutuma_photography</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
