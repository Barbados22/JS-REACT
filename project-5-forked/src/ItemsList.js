import Item from "./item.js";

export default function ItemsList(props) {
  const goods = props.items.map((el) => (
    <li key={el.id} className="ui-item-list">
      <Item info={el} />
      <button
        onClick={() => props.handleDeleteItem(el.id)}
        className="item-button"
      >
        Удалить
      </button>
    </li>
  ));

  return <ul className="ui-list"> {goods}</ul>;
}
