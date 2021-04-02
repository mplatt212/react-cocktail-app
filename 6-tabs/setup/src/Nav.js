import React from "react";

const Nav = ({ people, filterPeople, details }) => {
  return (
    <nav>
      {people.map((person) => {
        return (
          <button
            className={`btn-person ${
              details[0].title === person.title && "btn-active"
            }`}
            key={person.id}
            onClick={() => filterPeople(person.id)}
          >
            {person.company}
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;
