import React, { useState, useEffect } from "react";
import Tour from "./Tour";
import NoTours from "./NoTours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNotInterested = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section id="section-main">
      <h1>Our Tours</h1>
      <div className="line"></div>
      {!tours.length && <NoTours />}
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            tour={tour}
            handleNotInterested={handleNotInterested}
          />
        );
      })}
    </section>
  );
};

export default App;
