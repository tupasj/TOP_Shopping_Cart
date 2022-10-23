import { capitalizeFirstLetter } from "../../utils/stringUtils";

const FilterDropdown = (props) => {
  const items = props.items;
  const handleInput = props.handleInput;
  const currency = props.currency;

  return (
    <div className="category__dropdown">
      {items.map((item) => {
        return (
          <div className="category__dropdown__item" key={item}>
            <input
              type="checkbox"
              id={item}
              name={item}
              value={item}
              onChange={handleInput}
            ></input>
            <label htmlFor={item}>{currency && "$"}{capitalizeFirstLetter(item)}</label>
          </div>
        );
      })}
    </div>
  );
};

export { FilterDropdown };
