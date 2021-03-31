import React, { useState } from "react";
import people from "./data";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNum = (num) => {
    if (num < 0) {
      setIndex(people.length - 1);
    } else if (num > people.length - 1) {
      setIndex(0);
    } else if (num == index) {
      setIndex(num + 1);
    } else {
      setIndex(num);
    }
  };

  const handleBack = () => {
    checkNum(index - 1);
  };

  const handleForward = () => {
    checkNum(index + 1);
  };

  const handleRandom = () => {
    let randNum = Math.floor(Math.random() * people.length - 1);
    checkNum(randNum);
  };

  return (
    <article className="section-review" key={id}>
      <div className="img-container">
        <div className="quote">
          <FaQuoteRight />
        </div>
        <img src={image} alt={name} />
      </div>
      <h4 className="name">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-arrows">
        <FiArrowLeftCircle className="btn" onClick={handleBack} />
        <FiArrowRightCircle className="btn" onClick={handleForward} />
      </div>
      <button className="btn-surprise" onClick={handleRandom}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
