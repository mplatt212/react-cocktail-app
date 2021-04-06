import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alertStatus, setAlertStatus] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const showAlert = (type = "", msg = "", show = false) => {
    setAlertStatus({ type, msg, show });
  };

  const handleEdit = (id) => {
    setEditMode(true);
    const editItem = list.filter((item) => id === item.id);
    setItem(editItem[0].item);
    setEditId(editItem[0].id);
    showAlert("edit", "Edit selected item.", true);
  };

  const handleRemove = (listId) => {
    const newList = list.filter((item) => listId !== item.id);
    setAlertStatus({
      type: "danger",
      msg: "You have successfully removed the item.",
      show: true,
    });
    setList(newList);
  };

  const handleClear = () => {
    setList([]);
    list.length && showAlert("danger", "All items cleared from list.", true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && !editMode) {
      setList([{ id: new Date().getTime().toString(), item: item }, ...list]);
      setItem("");
      showAlert("success", "You have successfully added the item.", true);
    }
    if (item && editMode) {
      const newList = list.map((listItem) => {
        if (editId === listItem.id) {
          return { ...listItem, item: item };
        }
        return listItem;
      });
      setList(newList);
      setItem("");
      setEditMode(false);
      showAlert("success", "You have successfully edited the item.", true);
    }
  };
  return (
    <section className="container">
      <h1>Grocery List</h1>
      {alertStatus.show && (
        <Alert alertStatus={alertStatus} showAlert={showAlert} />
      )}

      <form>
        <input
          type="text"
          placeholder="Eggs"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <section className="list-container">
        {list.map((item, index) => {
          return (
            <List
              listItem={item}
              key={index}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          );
        })}
        <button id="btn-clear" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default App;
