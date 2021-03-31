import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="single-question">
      <header>
        <h4>{title}</h4>
        <div className="expand-btn-container">
          <button onClick={handleShowInfo} className="expand-btn">
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
};

export default Question;
