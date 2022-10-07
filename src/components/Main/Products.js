import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { AddToCartButton } from "../UI/AddToCartButton";
import ClothesAPI from "../../api/ClothesAPI";

const Products = (props) => {
  const type = props.type;
  const filteredProducts = ClothesAPI.getFilteredProducts(type);
  const orders = props.orders;
  const setOrders = props.setOrders;
  const addOrder = props.addOrder;
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;

  return (
    <div className="products">
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} className="product">
            <Link to={`/product-view/${product.id}`}>
              <img
                className="product__image"
                src={product.src}
                alt={product.alt}
              ></img>
            </Link>
            <div className="product__name">{product.name}</div>
            <div className="product__rating">
              <Rating rating={product.rating} />
            </div>
            <div className="product__price">
              {product.salePrice ? (
                <>
                  ${product.salePrice}
                  <span className="product__price--line-through">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span>${product.price}</span>
              )}
            </div>
            <div className="product__buttons">
              <AddToCartButton
                productID={product.id}
                itemCount={itemCount}
                setItemCount={setItemCount}
                orders={orders}
                setOrders={setOrders}
                addOrder={addOrder}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Products };
