const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <div className="category">
        <span className="category__text">Type</span>
        <span className="category__plus">+</span>
      </div>
      <div className="category">
        <span className="category__text">Brand</span>
        <span className="category__plus">+</span>
      </div>
      <div className="category">
        <span className="category__text">Price</span>
        <span className="category__plus">+</span>
      </div>
      <div className="category">
        <span className="category__text">Offers</span>
        <span className="category__plus">+</span>
      </div>
    </div>
  );
};

export { CategoryFilter };
