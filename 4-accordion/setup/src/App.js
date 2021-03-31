import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestion] = useState(data);

  return (
    <section className="section-main">
      <header id="title">
        <h3>Questions and Answers About Login</h3>
      </header>
      <article className="questions-container">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </article>
    </section>
  );
}

export default App;
