import MensClothing from '../../assets/data/MensClothing.json';

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <img className="product__image" src={MensClothing.MensClothing[0].image} alt={MensClothing.MensClothing[0].alt}></img>
        <div className="product__name">{MensClothing.MensClothing[0].name}</div>
        <div className="product__reviews">Product reviews</div>
        <div className="product__price">Product price</div>
        <div className="product__buttons">
          <button>View</button>
          <button>Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { Products };
