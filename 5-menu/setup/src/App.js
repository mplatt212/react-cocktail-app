import React, {useState} from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['All', ...new Set(items.map((item)=>item.category))]

function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [category,setCategory] = useState(allCategories)

const filterCategories = (category) => {
  if(category == 'All') {
    setMenuItems(items)
    return;
  }

  const newItems = items.filter((item) => 
    category == item.category
  )
  setMenuItems(newItems)
}

  return <>
    <main>
      <header>
        <h2 className="title">Our Menu</h2>
        <div className="underline"></div>
      </header>
      <nav>
        <Categories allCategories={allCategories} filterCategories={filterCategories} />
      </nav>
      <article className="article-menu">
        <Menu menuItems={menuItems} />
      </article>
    </main>
  </>
}

export default App;