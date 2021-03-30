import React, { useState } from "react";

const Tour = ({ tour, handleNotInterested }) => {
  const { name, info, image, price } = tour;

  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div className="name-price">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="info">
        {readMore ? info : `${info.substring(0, 200)} ...`}
        <button className="read-btn" onClick={handleReadMore}>
          {readMore ? `Read Less` : `Read More`}
        </button>
      </div>
      <button
        className="interested-btn"
        onClick={() => handleNotInterested(tour.id)}
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
