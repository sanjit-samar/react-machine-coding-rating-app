import "./styles.css";
import { useState } from "react";

export default function Star({ totalStar }) {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    console.log(index);
  };
  return (
    <div className="star-container">
      {[...Array(totalStar)].map((_, index) => (
        <span key={index} onClick={() => handleRating(index)}>
          ★
        </span>
      ))}
    </div>
  );
}
