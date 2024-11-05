import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

// Simulated product data
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
  // Add other products as needed
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
