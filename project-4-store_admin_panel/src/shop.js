import { useState } from "react";
import Item from "./item.js";

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

  function handleDeleteItem(itemId) {
    const newArr = items.filter((item) => item.id !== itemId);
    setItems(newArr);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="item-name">Название товара</label>
          <input
            type="text"
            id="item-desc"
            placeholder="Название товара"
            className="ui-textfield"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="item-desc">Описание товара</label>
          <input
            type="text"
            id="item-desc"
            placeholder="Описание товара"
            className="ui-textfield"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {alert && (
              <p className="ui-title">
                Укажите
                {!name && " название"}
                {(!name ? 1 : 0) + (!desc ? 1 : 0) > 1 && " и "}
                {!desc && " описание"} товара
              </p>
            )}
          </div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>

      <ul className="ui-list">
        {items.map((item) => (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={() => handleDeleteItem(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
