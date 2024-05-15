import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="website-name">Mutuma Photography</span>
        <img src="public/camera icon.jpg" alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#featured-content">Portfolio</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#contact-form">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
