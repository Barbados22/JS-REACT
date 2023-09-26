export default function AddItem(props) {
  return (
    <form onSubmit={(e) => props.handleFormSubmit(e)}>
      <div>
        <label htmlFor="item-name">Название товара</label>
        <input
          type="text"
          id="item-name"
          placeholder="Название товара"
          className="ui-textfield"
          value={props.name}
          onChange={(e) => props.handleNameChange(e)}
        />
      </div>
      <div>
        <label htmlFor="item-desc">Описание товара</label>
        <input
          type="text"
          id="item-desc"
          placeholder="Описание товара"
          className="ui-textfield"
          value={props.desc}
          onChange={(e) => props.handleDescChange(e)}
        />
      </div>
      <div className="form-footer">
        <div className="validation">
          {props.alert && (
            <p className="ui-title">
              Укажите
              {!props.name && " название"}
              {(!props.name ? 1 : 0) + (!props.desc ? 1 : 0) > 1 && " и "}
              {!props.desc && " описание"} товара
            </p>
          )}
        </div>
        <input type="submit" className="ui-button" value="Добавить" />
      </div>
    </form>
  );
}
