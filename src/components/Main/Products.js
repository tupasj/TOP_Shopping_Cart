import MensClothing from "../../assets/data/MensClothing.json";
import WomensClothing from "../../assets/data/WomensClothing.json";
import { Rating } from "./Rating";
import { Link, Outlet } from "react-router-dom";
const Products = (props) => {
  const type = props.type;
  let filter;
  if (type !== "men" && type !== "women") {
    filter = type;
  }

  const getProductType = (type) => {
    let clothes;
    if (type === "men") {
      clothes = MensClothing.Set1;
    } else if (type === "women") {
      clothes = WomensClothing.Set1;
    } else {
      clothes = MensClothing.Set1.concat(WomensClothing.Set1);
    }
    return clothes;
  };

  let clothes = getProductType(type);

  if (filter === "brandNew") {
    clothes = clothes.filter(element => element.brandNew);
  } else if (filter === "onSale") {
    clothes = clothes.filter(element => element.salePrice);
  }

  let products = clothes.map((element) => {
    return (
      <div key={element.id} className="product">
        <img
          className="product__image"
          src={element.src}
          alt={element.alt}
        ></img>
        <div className="product__name">{element.name}</div>
        <div className="product__rating">
          <Rating rating={element.rating} />
        </div>
        <div className="product__price">
          {element.salePrice ?
          <>${element.salePrice}<span className="product__price--line-through">${element.price}</span></>
          :
          <span>${element.price}</span>}
        </div>
        <div className="product__buttons">
          <button><Link to={`/product-view/${element.id}`}>View</Link></button>
          <button>Add to wishlist</button>
          <Outlet />
        </div>
      </div>
    );
  });

  return <div className="products">{products}</div>;
};

export { Products };
