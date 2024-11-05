import React from "react";
import './ReviewList.css'
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h4>Customer Reviews</h4>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review-item">
            <strong>{review.rating} Stars</strong>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
