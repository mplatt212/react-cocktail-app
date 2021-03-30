import React, {useState} from 'react';
import List from './List';
import data from './data';

function App() {
    const [people,setPeople] = useState(data);

    function toggleList() {
        if(people.length) {
            setPeople([]);
        } else {
            setPeople(data);
        }
    }

    return <>
        <main>
            <section>
                <h2 className='title'>{people.length} Birthdays Today</h2>
                    <List people={people} />
                <button className="btn clear-all" onClick={()=>toggleList()}>
                    {people.length ? 'Clear All' : 'Update'}
                </button>
            </section>
        </main>
    </>
}

export default App;