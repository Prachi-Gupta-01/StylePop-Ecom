import React, { useState } from "react";
import './ReviewForm.css'
const ReviewForm = ({ onSubmitReview }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview({ rating, comment });
    setRating(1); // Reset rating
    setComment(""); // Reset comment
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Leave a Review</h4>
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Star{num > 1 && "s"}
          </option>
        ))}
      </select>

      <label>Comment:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>

      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
