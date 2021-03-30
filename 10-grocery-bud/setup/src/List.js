import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

function List({list,removeItem,editItem}) {

    return <>
        {list.map((item) => {
            const {id,title} = item;

            return<>
            <article className="list-item" key={id}>
                <p className="item-name">{title}</p>
                <div className="icons">
                    <button className="edit" onClick={()=>editItem(id)}>
                        <FaEdit />
                    </button>
                    <button className="trash" onClick={()=>removeItem(id)}>
                        <FaTrash />
                    </button>
                </div>
            </article>
            </>
        })}
        </>
}

export default List;