import React from 'react';

function Categories({allCategories,filterCategories}) {
  return <>
    {allCategories.map((category)=>{
      return <>
        <button className="btn btn-primary btn-category" onClick={()=>filterCategories(category)}>{category}</button>
      </>
    })}
  </>
}

export default Categories;