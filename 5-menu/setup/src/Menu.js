import React from "react";

const Menu = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, category, price, img: image, desc } = item;

        return (
          <article className="menu-item" key={id}>
            <img src={image} alt={title} className="img-items" />
            <div className="menu-details">
              <div className="menu-item-header">
                <h5>{title}</h5>
                <p className="price">${price}</p>
              </div>
              <p className="info">{desc}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Menu;
