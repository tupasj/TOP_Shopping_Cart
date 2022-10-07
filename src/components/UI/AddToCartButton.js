import { forwardRef } from "react";
import { useParams } from "react-router-dom";
import ClothesAPI from "../../api/ClothesAPI";
import { checkDuplicateOrders } from "../../utils/cartUtils";

const AddToCartButton = forwardRef(function (props, ref) {
  const productID = props.productID;
  const orders = props.orders;
  const setOrders = props.setOrders;
  const addOrder = props.addOrder;
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const urlParam = useParams();

  const updateOrderElementQuantityById = (elementID) => {
    const mutatedOrders = [...orders];
    const matchedOrder = mutatedOrders.find((order) => order.id === elementID);
    const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
    const updatedQuantity = (matchedOrder.quantity += 1);
    const updatedOrder = {...matchedOrder, quantity: updatedQuantity};
    mutatedOrders[matchedOrderIndex] = updatedOrder;
    setOrders([...mutatedOrders]);
  };

  const updateOrderElementQuantity = (product, amount) => {
    const mutatedOrders = [...orders];
    const matchedOrder = mutatedOrders.find((order) => order.id === product.id);
    const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
    const updatedQuantity = (matchedOrder.quantity += amount);
    const updatedOrder = {...matchedOrder, quantity: updatedQuantity};
    mutatedOrders[matchedOrderIndex] = updatedOrder;
    try {
      setOrders([...mutatedOrders]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = () => {
    if (productID) { // If have to get current product by productID (add to cart button is located out of ProductView component)
      const currentProduct = ClothesAPI.getCurrentProductById(productID);
      const order = ClothesAPI.makeOrder(currentProduct, 1);
      const isDuplicateOrder = checkDuplicateOrders(orders, currentProduct.id);
      if (isDuplicateOrder) {
        console.log('if block');
        updateOrderElementQuantityById(productID);
        setItemCount(itemCount + 1);
      } else {
        addOrder(order);
        setItemCount(itemCount + 1);
      }
    } else if (ref.current.valueAsNumber >= 1) {
      const productQuantity = ref.current.valueAsNumber;
      const currentProduct = ClothesAPI.getCurrentProduct(urlParam);
      const order = ClothesAPI.makeOrder(currentProduct, productQuantity);
      const isDuplicateOrder = checkDuplicateOrders(orders, currentProduct.id);
      if (isDuplicateOrder) {
        console.log('else if');
        updateOrderElementQuantity(currentProduct, productQuantity);
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
