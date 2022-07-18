import MensClothing from "../../assets/data/MensClothing.json";
import WomensClothing from "../../assets/data/WomensClothing.json";
import { Rating } from "./Rating";

const Products = (props) => {
  const type = props.type; // men and women
  const filter = props.filter; //brandNew and onSale
  //If type == 'men', render all mens clothing
  //Else if type == 'women', render all womens clothing
  //Else if type == 'brandNew', render all clothing that's brand new
  //Else if type == 'onSale', render all clothing that's on sale

  let typeIsFilter = false;
  const getProductType = (type) => {
    let clothes;
    if (type === "men") {
      clothes = MensClothing.Set1;
    } else if (type === "women") {
      clothes = WomensClothing.Set1;
    } else {
      clothes = MensClothing.Set1.concat(WomensClothing.Set1);
      typeIsFilter = true;
    }
    return clothes;
  };

  let clothes = getProductType(type);
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
        <div className="product__price">${element.price}</div>
        <div className="product__buttons">
          <button>View</button>
          <button>Add to wishlist</button>
        </div>
      </div>
    );
  });

  //If filter == true, loop through both JSON files with the props.filter as the specific filter
  //const filteredData == mensClothing.json + womensClothing.json arrays joined into one array -> filtered for props.filter. Then after obtaining the array map it.
  //Else loop through the JSON file matching props.type
  //const unfilteredData == map the correct data which is props.type.
  return (
    <div className="products">
      { products }
    </div>
  )
};

export { Products };
