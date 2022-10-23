import { FilterDropdown } from "./FilterDropdown";

const Filter = (props) => {
  const filter = props.filter;
  const setFilter = props.setFilter;

  const handleInput = (e) => {
    const clickedFilter = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setFilter([...filter, clickedFilter]);
    } else if (!checked) {
      const removedFilterArray = filter.filter((element) => element !== clickedFilter);
      setFilter(removedFilterArray);
    }
  }

  return (
    <div className="category-filter">
      <div className="category">
        <span className="category__text">Category</span>
        <span className="category__plus">+</span>
        <FilterDropdown items={["tops", "pants", "shorts", "accessories"]} handleInput={handleInput} />
      </div>
      <div className="category">
        <span className="category__text">Style</span>
        <span className="category__plus">+</span>
        <FilterDropdown items={["casual", "formal", "semi-formal", "indoor"]} handleInput={handleInput} />
      </div>
      <div className="category">
        <span className="category__text">Rating</span>
        <span className="category__plus">+</span>
        <FilterDropdown items={["3.0", "3.5", "4.0", "4.5", "5.0"]} handleInput={handleInput} />
      </div>
      <div className="category">
        <span className="category__text">Price</span>
        <span className="category__plus">+</span>
        <FilterDropdown items={["50", "100", "150", "200", "250", "300"]} handleInput={handleInput} currency={true} />
      </div>
    </div>
  );
};

export { Filter };
