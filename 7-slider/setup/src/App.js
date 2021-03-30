import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(() => {
    if(index < 0) {
      setIndex(people.length - 1);
    }
    if(index > people.length - 1) {
      setIndex(0);
    }
  },[people,index])

  useEffect(() => {
    const slideTime = setInterval(() => {
      setIndex(index + 1);
    },5000);

    return () => clearInterval(slideTime);
  }, [index])

  return <>
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person,personIndex) => {
          const {id,image,name,title,quote} = person;

          console.log(index)

          let position = 'slide';

          if(personIndex === index) {
            position = 'slide-active';
          }

          if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'slide-last';
          }
          
          return <>
            <article key={id} className={position}>
              <img className='person-img' src={image} alt={name} />
              <h4 className='person-name'>{name}</h4>
              <p className="person-title">{title}</p>
              <p className="person-quote">{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          </>
        })}
        <button className="prev" onClick={()=>setIndex(index-1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={()=>setIndex(index+1)}>
          <FiChevronRight></FiChevronRight>
        </button>
    </div>
    </section>
  </>
}

export default App;
