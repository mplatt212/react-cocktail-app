import React from 'react';

function List({people}) {
    return <>
        {people.map((person) => {
            const {id,name,age,image} = person;

            return <>
                <article className='list' key={id}>
                    <img className='image' src={image} alt={name}/>
                    <div className="info">
                        <h4 className="name">{name}</h4>
                        <p className='age'>{age} years</p>
                    </div>
                </article>
            </>
        })}
    </>
}

export default List;