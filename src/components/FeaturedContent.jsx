import React from 'react';
import FeaturedItem from './FeaturedItem'

// FeaturedContent component to display multiple items
const FeaturedContent = () => {
    // Sample data for featured items
    const featuredItems = [
      { id: 1, src: 'public/q.jpg', alt: 'Featured Item 1' },
      { id: 2, src: 'public/DSC_0062 copy.jpg', alt: 'Featured Item 2' },
      { id: 3, src: 'public/l.jpg', alt: 'Featured Item 3' },
      { id: 4, src: 'public/camera icon.jpg', alt: 'Featured Item 4' },
      { id: 5, src: 'public/camera icon.jpg', alt: 'Featured Item 5' },
      { id: 6, src: 'public/camera icon.jpg', alt: 'Featured Item 6' },
      { id: 7, src: 'public/camera icon.jpg', alt: 'Featured Item 7' },
      { id: 8, src: 'public/camera icon.jpg', alt: 'Featured Item 8' },
      { id: 8, src: 'public/camera icon.jpg', alt: 'Featured Item 8' },
      { id: 8, src: 'public/camera icon.jpg', alt: 'Featured Item 8' },
    ];
  
    return (
      <section className="featured-content">
        <div className="content-container">
          <h2>Featured Content</h2>
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