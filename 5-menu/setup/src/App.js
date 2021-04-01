import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(items);

  const newCategories = [
    "All",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  const filterCategories = (category) => {
    if (category === "All") {
      setMenuItems(items);
    } else {
      const newMenu = items.filter((item) => {
        return item.category === category;
      });
      setMenuItems(newMenu);
    }
  };

  return (
    <section>
      <Categories
        newCategories={newCategories}
        filterCategories={filterCategories}
      />
      ;
      <article className="menu-grid">
        <Menu items={menuItems} />
      </article>
    </section>
  );
};

export default App;
