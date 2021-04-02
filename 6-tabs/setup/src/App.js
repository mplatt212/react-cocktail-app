import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Details from "./Details";
import Loading from "./Loading";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [people, setPeople] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterPeople = (id) => {
    const newDetails = people.filter((person) => {
      return person.id === id;
    });
    setDetails(newDetails);
  };

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setPeople(data);
      setDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Loading />;
      </div>
    );
  }

  return (
    <section className="section-main">
      <h1>Experience</h1>
      <div className="underline"></div>
      <section className="grid">
        <article className="nav">
          <Nav people={people} filterPeople={filterPeople} details={details} />
        </article>
        <article className="details">
          <Details details={details} />
        </article>
      </section>
    </section>
  );
};

export default App;
