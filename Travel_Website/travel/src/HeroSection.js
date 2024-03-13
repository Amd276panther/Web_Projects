import React from 'react';
import travel from './travel.jpg';

function HeroSection() {
  return (
    <section className="hero" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="hero-content" style={{ maxWidth: '1000px', width: '100%' }}>
        <h2 style={{ color: "black" }}>Explore the World</h2>
        <p style={{ color: "black" }}>Discover amazing destinations and create unforgettable memories.</p>
        <img src={travel} alt="Travel" style={{ width: '100%', height: 'auto', zIndex: '1' }} />
      </div>
    </section>
  );
}

export default HeroSection;


