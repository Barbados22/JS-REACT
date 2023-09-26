import { useState } from "react";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [alert, setAlert] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name || !desc) {
      setAlert(true);
      return;
    }
    setItems([...items, { id: crypto.randomUUID(), name: name, desc: desc }]);
    setName("");
    setDesc("");
    setAlert(false);
  }

  function handleNameChange(e) {
    const value = e.currentTarget.value;
    setName(value);
  }

  function handleDescChange(e) {
    const value = e.currentTarget.value;
    setDesc(value);
  }

  function handleDeleteItem(itemId) {
    const newArr = items.filter((item) => item.id !== itemId);
    setItems(newArr);
  }

  return (
    <>
      <AddItem
        handleFormSubmit={handleFormSubmit}
        name={name}
        desc={desc}
        handleNameChange={handleNameChange}
        handleDescChange={handleDescChange}
        alert={alert}
      />
      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>

      <ItemsList items={items} handleDeleteItem={handleDeleteItem} />
    </>
  );
}
