import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [people, index]);

  const indexPlus = () => {
    setIndex(index + 1);
  };

  const indexMinus = () => {
    setIndex(index - 1);
  };

  const setClass = (position) => {
    if (position === index) {
      return "person-current";
    } else if (
      position === index - 1 ||
      (position === people.length - 1 && index === 0)
    ) {
      return "person-prev";
    }

    return "person-next";
  };

  return (
    <section className="section-main">
      <header>
        <h1>/Reviews</h1>
      </header>
      <article className="carousel">
        <button className="buttons btn-left" onClick={indexMinus}>
          <FiChevronLeft />
        </button>

        {people.map((person, personIndex) => {
          const { image, name, title, quote } = person;

          return (
            <section className={setClass(personIndex)} key={personIndex}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <h5>{title}</h5>
              <p>{quote}</p>
              <div className="quote">
                <FaQuoteRight />
              </div>
            </section>
          );
        })}
        <button className="buttons btn-right" onClick={indexPlus}>
          <FiChevronRight />
        </button>
      </article>
    </section>
  );
}

export default App;
