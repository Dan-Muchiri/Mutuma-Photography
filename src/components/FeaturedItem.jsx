import React from 'react';

// FeaturedItem component to represent each item
const FeaturedItem = ({ src, alt }) => {
  return (
    <div className="featured-item">
      <img src={src} alt={alt} />
    </div>
  );
};

export default FeaturedItem;