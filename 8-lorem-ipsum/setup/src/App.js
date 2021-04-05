import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (count < 0) {
      setCount(0);
    }
    if (count > 8) {
      setCount(8);
    }

    setText(data.slice(0, count));
  };

  return (
    <section id="section-main">
      <h2>Tired of Boring Lorem Ipsum?</h2>
      <form action="">
        <label htmlFor="input-ipsum">Paragraphs: </label>
        <input
          type="number"
          min="0"
          max="8"
          id="input-ipsum"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          GENERATE
        </button>
      </form>
      <article className="text-section">
        {text.length
          ? text.map((tex) => {
              return <p>{tex}</p>;
            })
          : ""}
      </article>
    </section>
  );
}

export default App;
