// PopStarCollection.js
import React from 'react';
import './PopStarCollection.css';

const PopStarCollection = ({ name, image ,onShopNowClick }) => {
  return (
    <div className='popstar-grid'>
      <div className="popstar-card">
      <img src={image} alt={`${name}'s profile`} className="popstar-image" />
      <h2 className="popstar-name">{name}</h2>
     
      <button className="shop-button" onClick={onShopNowClick}>Shop Now</button>
    </div>

    </div>
  );
};

export default PopStarCollection;
