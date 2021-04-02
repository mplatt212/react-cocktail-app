import React from "react";
import { HiCode } from "react-icons/hi";

const Details = ({ details }) => {
  const { title, company, dates, duties } = details[0];

  return (
    <article className="people-section">
      <h3>{title}</h3>
      <h4 id="company">{company}</h4>
      <p id="dates">{dates}</p>
      <ul id="duties">
        {duties.map((duty, index) => {
          return (
            <li key={index} className="duty-link">
              <HiCode className="bullet" />
              <span className="duty">{duty}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Details;
