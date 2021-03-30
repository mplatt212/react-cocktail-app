import React from 'react';

function Menu({menuItems}) {
  return <>
    {menuItems.map((item) => {
      const {id,title,img,price,desc} = item;

      return <>
        <div key={id} className="menu-item">
          <img src={img} alt={title} className="item-img"/>
          <div className="item-info">
            <header>
              <h4 className="menu-title">{title}</h4>
              <p className="price">${price}</p>
            </header>
            <div className="description">{desc}</div>
          </div>
        </div>
      </>
    })}
  </>
}

export default Menu;