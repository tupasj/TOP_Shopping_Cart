import { useEffect } from "react";

const CategoryFilter = (props) => {
  const filter = props.filter;
  const setFilter = props.setFilter;

  const handleInput = (e) => {
    const clickedFilter = e.target.value;
    // console.log('clickedFilter', clickedFilter);
    const checked = e.target.checked;
    // console.log('checked: ', checked);
    if (checked) {
      // console.log('add');
      setFilter([...filter, clickedFilter]);
    } else if (!checked) {
      // console.log('remove');
      const removedFilterArray = filter.filter((element) => element !== clickedFilter);
      setFilter(removedFilterArray);
    }
  }

  useEffect(() => {
    console.log('filter update: ', filter);
  }, [filter]);

  return (
    <div className="category-filter">
      <div className="category">
        <span className="category__text">Category</span>
        <span className="category__plus">+</span>
        <div className="category__dropdown">
          <div className="category__dropdown__item">
            <input type="checkbox" id="tops" name="tops" value="tops" onChange={handleInput}></input>
            <label htmlFor="tops">Tops</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="pants" name="pants" value="pants"></input>
            <label htmlFor="pants">Pants</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="shorts" name="shorts" value="shorts"></input>
            <label htmlFor="shorts">Shorts</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="accessories" name="accessories" value="accessories"></input>
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
      </div>
      <div className="category">
        <span className="category__text">Style</span>
        <span className="category__plus">+</span>
        <div className="category__dropdown">
          <div className="category__dropdown__item">
            <input type="checkbox" id="casual" name="casual" value="casual"></input>
            <label htmlFor="casual">Casual</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="formal" name="formal" value="formal"></input>
            <label htmlFor="formal">Formal</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="semi-formal" name="semi-formal" value="semi-formal"></input>
            <label htmlFor="semi-formal">Semi-formal</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="indoor" name="indoor" value="indoor"></input>
            <label htmlFor="indoor">Indoor</label>
          </div>
        </div>
      </div>
      <div className="category">
        <span className="category__text">Rating</span>
        <span className="category__plus">+</span>
        <div className="category__dropdown">
          <div className="category__dropdown__item">
            <input type="checkbox" id="3.0" name="3.0" value="3.0"></input>
            <label htmlFor="3.0">3.0</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="3.5" name="3.5" value="3.5"></input>
            <label htmlFor="3.5">3.5</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="4.0" name="4.0" value="4.0"></input>
            <label htmlFor="4.0">4.0</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="4.5" name="4.5" value="4.5"></input>
            <label htmlFor="4.5">4.5</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="5.0" name="5.0" value="5.0"></input>
            <label htmlFor="5.0">5.0</label>
          </div>
        </div>
      </div>
      <div className="category">
        <span className="category__text">Price</span>
        <span className="category__plus">+</span>
        <div className="category__dropdown">
          <div className="category__dropdown__item">
            <input type="checkbox" id="50" name="50" value="50"></input>
            <label htmlFor="50">$50</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="100" name="100" value="100"></input>
            <label htmlFor="100">$100</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="150" name="150" value="150"></input>
            <label htmlFor="150">$150</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="200" name="200" value="200"></input>
            <label htmlFor="200">$200</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="250" name="250" value="250"></input>
            <label htmlFor="250">$250</label>
          </div>
          <div className="category__dropdown__item">
            <input type="checkbox" id="300" name="300" value="300"></input>
            <label htmlFor="300">$300</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CategoryFilter };
