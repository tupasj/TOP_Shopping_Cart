import { forwardRef } from "react";
import { useParams } from "react-router-dom";
import ClothesAPI from "../../api/ClothesAPI";
import { checkDuplicateOrders, updateOrderElementQuantity , updateOrderElementQuantityById } from "../../utils/cartUtils";

const AddToCartButton = forwardRef(function (props, ref) {
  const productID = props.productID;
  const orders = props.orders;
  const setOrders = props.setOrders;
  const addOrder = props.addOrder;
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const urlParam = useParams();

  const updateCart = () => {
    if (productID) { // This button is located out of ProductView component (check by getting current product by productID)
      // Make order by id
      const currentProduct = ClothesAPI.getCurrentProductById(productID);
      const order = ClothesAPI.makeOrder(currentProduct, 1);
      const isDuplicateOrder = checkDuplicateOrders(orders, currentProduct.id);
      // Handle duplicate orders by id
      if (isDuplicateOrder) {
        updateOrderElementQuantityById(productID, orders, setOrders);
        setItemCount(itemCount + 1);
      } else {
        addOrder(order);
        setItemCount(itemCount + 1);
      }
    } else if (ref.current.valueAsNumber >= 1) { // Button is located in ProductView component (check by getting input element value ref)
      // Make order
      const productQuantity = ref.current.valueAsNumber;
      const currentProduct = ClothesAPI.getCurrentProduct(urlParam);
      const order = ClothesAPI.makeOrder(currentProduct, productQuantity);
      // Handle duplicate orders
      const isDuplicateOrder = checkDuplicateOrders(orders, currentProduct.id);
      if (isDuplicateOrder) {
        updateOrderElementQuantity(currentProduct, productQuantity, orders, setOrders);
        setItemCount(itemCount + productQuantity);
      } else {
        addOrder(order);
        setItemCount(itemCount + productQuantity);
      }
    }
  };

  return <button onClick={updateCart}>Add to cart</button>;
});

export { AddToCartButton };
