import React from 'react';
import FeaturedItem from './FeaturedItem';

const FeaturedContent = () => {
  const featuredItems = [
    { "id": 1, "src": "/DSC_0510.jpg", "alt": "Featured Item 1" },
    { "id": 2, "src": "/DSC_0146 copy.jpg", "alt": "Featured Item 2" },
    { "id": 3, "src": "/DSC_0421.jpg", "alt": "Featured Item 3" },
    { "id": 4, "src": "/DSC_0505.jpg", "alt": "Featured Item 4" },
    { "id": 5, "src": "/DSC_0029 copy.jpg", "alt": "Featured Item 5" },
    { "id": 6, "src": "/IMG_9167 copy.jpg", "alt": "Featured Item 6" },
    { "id": 7, "src": "/DSC_0062 copy.jpg", "alt": "Featured Item 7" },
    { "id": 8, "src": "/DSC_0009 copy.jpg", "alt": "Featured Item 8" },
    { "id": 9, "src": "/IMG_1140 copy.jpg", "alt": "Featured Item 9" },
    { "id": 10, "src": "/DSC_0469.jpg", "alt": "Featured Item 10" },
    { "id": 11, "src": "/q.jpg", "alt": "Featured Item 11" },
    { "id": 12, "src": "/DSC_0066 copy.jpg", "alt": "Featured Item 12" },
    { "id": 13, "src": "/DSC_0049 copy.jpg", "alt": "Featured Item 13" },
    { "id": 14, "src": "/DSC_0465.jpg", "alt": "Featured Item 14" },
    { "id": 15, "src": "/DSC_0027 copy v.jpg", "alt": "Featured Item 15" },
    { "id": 16, "src": "/l.jpg", "alt": "Featured Item 16" },
    { "id": 17, "src": "/ll.jpg", "alt": "Featured Item 17" },
    { "id": 18, "src": "/DSC_0334 copy.jpg", "alt": "Featured Item 18" },
    { "id": 19, "src": "/DSC_0021.jpg", "alt": "Featured Item 19" },
    { "id": 20, "src": "/DSC_0551.jpg", "alt": "Featured Item 20" }
  ];

  return (
    <section id="featured-content" className="featured-content">
      <div className="overlay"></div>
      <img className="background-image" src="/background2.avif" alt="Background" />
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="arrow"></div>
      </div>
      <div className="logo">
        <span className="website-name">Mutuma Photography</span>
        <img src="/camera icon.jpg" alt="Logo" />
      </div>
      <nav className="hero-navigation">
        <ul>
          <li>
            <a href="#hero-section">Home</a>
          </li>
          <li>
            <a href="#featured-content">Portfolio</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <div className="featured-items">
          {featuredItems.map(item => (
            <FeaturedItem key={item.id} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
