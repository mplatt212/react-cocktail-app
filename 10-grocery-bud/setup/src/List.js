import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const List = ({ listItem, handleRemove, handleEdit }) => {
  return (
    <article className="list">
      <p className="list-item">{listItem.item}</p>
      <div className="btn-container">
        <button className="btn-edit" onClick={() => handleEdit(listItem.id)}>
          <BiEdit />
        </button>
        <button
          className="btn-remove"
          onClick={() => handleRemove(listItem.id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </article>
  );
};

export default List;
