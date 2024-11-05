import React, { useState, useEffect } from "react";
import "./Shop.css";
import {Link} from "react-router-dom"

const sampleProducts = [
  {
    id: 1,
    name: "Neon Hoodie",
    description: "A stylish neon hoodie for the streetwear enthusiast.",
    price: "$49.99",
    image: "https://images.pexels.com/photos/7315538/pexels-photo-7315538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Graffiti Sneakers",
    description: "Sneakers with unique graffiti artwork.",
    price: "$69.99",
    image: "https://images.pexels.com/photos/1054787/pexels-photo-1054787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Retro Jacket",
    description: "A retro jacket inspired by '80s pop culture.",
    price: "$89.99",
    image: "https://images.pexels.com/photos/15935423/pexels-photo-15935423/free-photo-of-woman-in-jacket-posing-by-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  // Add more products here as needed
];

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data (simulated here with sample data)
  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="shop">
      <h2>Shop Our Collection</h2>
      <div className="product-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <Link to={`/product/${product.id}`} className="details-button">
              View Details
            </Link>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
