import { forwardRef } from "react";
import { useParams } from "react-router-dom";
import ClothesAPI from "../../api/ClothesAPI";

const AddToCartButton = forwardRef(function (props, ref) {
  // Prop: itemID (to be able to reference specific item to add to cart when the button is on products grid)
  const productID = props.productID;
  const addAnonOrder = props.addAnonOrder;
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const urlParam = useParams();

  const updateCart = () => {
    if (productID) { // If have to get current product by productID (add to cart button is located out of ProductView component)
      const currentProduct = ClothesAPI.getCurrentProductById(productID);
      const order = ClothesAPI.makeOrder(currentProduct, 1);
      setItemCount(itemCount + 1);
      addAnonOrder(order);
    } else if (ref.current.valueAsNumber >= 1) {
      const currentProduct = ClothesAPI.getCurrentProduct(urlParam);
      const productQuantity = ref.current.valueAsNumber;
      const order = ClothesAPI.makeOrder(currentProduct, productQuantity);
      setItemCount(itemCount + productQuantity);
      addAnonOrder(order);
    }
  };

  return <button onClick={updateCart}>Add to cart</button>;
});

export { AddToCartButton };
