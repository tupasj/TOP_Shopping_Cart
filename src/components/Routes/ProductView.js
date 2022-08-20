import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import MensClothing from "../../assets/data/MensClothing.json";
import WomensClothing from "../../assets/data/WomensClothing.json";
import { auth, userWriteOrder } from "../..";

const ProductView = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const anonOrders = props.anonOrders;
  const addAnonOrder = props.addAnonOrder;
  const urlParam = useParams();
  const allProducts = MensClothing.Set1.concat(WomensClothing.Set1);
  const currentProduct = allProducts.find(
    (product) => product.id === urlParam.paramId
  );
  const quantityRef = useRef();

  const incrementCartCount = () => {
    const inputTag = document.querySelector('#quantity');
    const inputValue = inputTag.valueAsNumber;
    setItemCount(itemCount + inputValue);
  };

  const makeOrder = () => {
    const productQuantity = getProductQuantity();
    const productSalePrice = currentProduct.salePrice ? currentProduct.salePrice : false;
    const order = {
      id: currentProduct.id,
      name: currentProduct.name,
      src: currentProduct.src,
      alt: currentProduct.alt,
      price: currentProduct.price,
      salePrice: productSalePrice,
      quantity: productQuantity
    };
    return order;
  };

  const addOrderToCart = () => {
    const order = makeOrder();
    addAnonOrder(order);
  };

  const getProductQuantity = () => {
    return quantityRef.current.valueAsNumber;
  };

  const updateCart = () => {
    incrementCartCount();
    addOrderToCart();
  };

  useEffect(() => {
    if (auth.currentUser) {
      userWriteOrder(auth.currentUser, anonOrders);
    };
  }, [anonOrders]);

  return (
    <div className="product-view">
      <div className="product-view__main">
        <img
          className="product-view__img"
          src={currentProduct.src}
          alt={currentProduct.alt}
        ></img>
        <div className="product-view__buttons-container">
          <span className="product-view__product-name">{currentProduct.name}</span>
          <label htmlFor="quantity">Quantity: </label>
          <input ref={quantityRef} type="number" id="quantity" name="quantity" min="1" max="100"></input>
          <div className="product-view__buttons">
            <button onClick={updateCart}>Add to cart</button>
            <button>Wishlist</button>
          </div>
        </div>
      </div>
      <div className="product-view__details">
        <span className="product-view__title">Product Details</span>
        <p className="product-view__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          aliquet bibendum enim facilisis gravida neque convallis. At
          consectetur lorem donec massa sapien. Senectus et netus et malesuada
          fames ac turpis. Morbi enim nunc faucibus a pellentesque sit amet
          porttitor eget. Massa ultricies mi quis hendrerit dolor magna eget.
          Amet cursus sit amet dictum sit amet justo. Vitae auctor eu augue ut
          lectus arcu bibendum. In fermentum posuere urna nec tincidunt praesent
          semper feugiat. Dui accumsan sit amet nulla facilisi morbi tempus.
          Euismod quis viverra nibh cras pulvinar.
        </p>
        <ul className="product-view__bullets">
          <li>Bullet 1</li>
          <li>Bullet 2</li>
          <li>Bullet 3</li>
        </ul>
      </div>
    </div>
  );
};

export { ProductView };
