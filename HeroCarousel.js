import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";

const images = [
  "https://images.pexels.com/photos/5236996/pexels-photo-5236996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with paths to your images
  "https://images.pexels.com/photos/28438781/pexels-photo-28438781/free-photo-of-vibrant-neon-portrait-of-a-young-woman-in-cdmx.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="hero-carousel">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="carousel-content">
          <h1>Discover Your Style, Inspired by Culture</h1>
          <p>Find exclusive streetwear inspired by the icons you love.</p>
          <button>Explore Collections</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
