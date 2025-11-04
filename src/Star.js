import "./styles.css";
import { useState } from "react";

export default function Star({ totalStar }) {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    if (rating === index + 1) {
      setRating(index + 1);
    } else {
      setRating(index + 1);
    }
  };
  return (
    <>
      <div className="star-container">
        {[...Array(totalStar)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "star selected" : "star"}
            onClick={() => handleRating(index)}
          >
            ★
          </span>
        ))}
      </div>

      <p>Rating : {rating}</p>
    </>
  );
}
