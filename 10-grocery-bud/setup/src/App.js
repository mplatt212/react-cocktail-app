import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [alertStatus, setAlertStatus] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const showAlert = (type = "", msg = "", show = false) => {
    setAlertStatus({ type, msg, show });
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

    setList([{ id: new Date().getTime().toString(), item: item }, ...list]);
    setItem("");
    showAlert("success", "You have successfully added the item.", true);
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
            <List listItem={item} key={index} handleRemove={handleRemove} />
          );
        })}
        <button className="btn-clear" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default App;
