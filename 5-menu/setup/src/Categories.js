import React from "react";

const Categories = ({ items, newCategories, filterCategories }) => {
  return (
    <section className="section-nav">
      <header className="nav-header">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <nav>
        {newCategories.map((category, index) => {
          return (
            <button
              className="btn-category"
              onClick={() => filterCategories(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </nav>
    </section>
  );
};

export default Categories;
