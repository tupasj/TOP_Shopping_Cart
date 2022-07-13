import MensClothing from "../../assets/data/MensClothing.json";

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <img
          className="product__image"
          src={MensClothing.Set1[0].src}
          alt={MensClothing.Set1[0].alt}
        ></img>
        <div className="product__name">{MensClothing.Set1[0].name}</div>
        <div className="product__rating">{MensClothing.Set1[0].rating}</div>
        <div className="product__price">${MensClothing.Set1[0].price}</div>
        <div className="product__buttons">
          <button>View</button>
          <button>Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { Products };
