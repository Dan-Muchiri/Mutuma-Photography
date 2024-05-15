import React, { useState, useEffect } from 'react';
import FeaturedItem from './FeaturedItem';

// FeaturedContent component to display multiple items
const FeaturedContent = () => {
  const [loading, setLoading] = useState(true);
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/featuredItems');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFeaturedItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="featured-content" className="featured-content">
      <div className="overlay"></div>
      <img className="background-image" src="public/background2.avif" alt="Background" />
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
