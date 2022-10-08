import { useEffect } from "react";
import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";

const CartOrders = (props) => {
  const orders = props.orders;
  const setOrders = props.setOrders;
  const setSubtotal = props.setSubtotal;

  // const handleQuantityInputChange = (e, productPrice) => {
  //   // Called on input click
  //   // getinput value attribute (current quantity), input's product price
  //   // should be able to reference the values it was rendered with/initialized as, so don't have to use after DOM render techniques such as useRef

  //   // if newValue < currentQuantity
  //     // currentQuantity - newValue = quantityDifference
  //     // subtotal - (quantityDifference * productPrice)
  //   // else if newValue > currentQuantity
  //     // newValue - currentQuantity = quantityDifference
  //     // subtotal + (quantityDifference * productPrice)

  //   // alternatively..

  //   // remove currentOrder total from subtotal
  //     // previousOrderTotal = currentQuantity * productPrice
  //     // tempSubtotal = subtotal - previousOrderTotal
  //     // updatedOrderTotal = currentQuantity * productPrice
  //     // updatedSubtotal = tempSubtotal + updatedOrderTotal
  //   // add updatedOrder to subtotal
  //     // setSubtotal (updatedSubtotal)

  //     const currentQuantity = e.target.value;
  //     const previousOrderTotal = currentQuantity * productPrice;
  //     const tempSubtotal = subtotal - previousOrderTotal;

  //   setSubtotal()
  // }

  const handleChange = (e) => {
    // Reduce through orders for overall quantity and subtotal
    // Simply push results to setItemCount and setSubtotal
    // Have a snapshot of orders, every time a quantity input changes, rerender orders with the different quantity
    // Probably make a separate quantity state, intialized at the Cart component
      // So every time cart page renders, reduce orders for only the information you need (quantity)
      // Every time input is clicked, compute the new quantity using the overall quantity state.. which is the problem, you need to do it by getting the difference..
      //.. between the current value and old value
    console.log(e);
    console.log(e.target.value);
  };

  useEffect(() => {
    const calculateSubtotal = () => {
      let accumulatorValue = 0;
      for (let i = 0; i < orders.length; i++) {
        const hasSalePrice = orders[i].salePrice ? true : false;
        let productPrice;
        if (hasSalePrice) {
          productPrice = orders[i].salePrice;
        } else {
          productPrice = orders[i].price;
        }
        const productQuantity = orders[i].quantity;
        const orderCost = productPrice * productQuantity;
        accumulatorValue += orderCost;
      }
      setSubtotal(accumulatorValue);
    };
    calculateSubtotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <div className="orders">
      {orders.map((order) => {
        return (
          <div key={order.name} className="order">
            <img className="order__img" src={order.src} alt="lorem ipsum"></img>
            <div className="order__info">
              <span className="order__name">{order.name}</span>
              <span className="order__price">
                {order.salePrice ? (
                  <>
                    ${order.salePrice}
                    <span className="order__price--line-through">
                      ${order.price}
                    </span>
                  </>
                ) : (
                  <span>${order.price}</span>
                )}
              </span>
              <label htmlFor="order__quantity">Quantity: </label>
              <input
                className="input__quantity"
                type="number"
                id="order__quantity"
                name="order__quantity"
                min="1"
                max="100"
                defaultValue={order.quantity}
                onChange={handleChange}
              ></input>
              <CartRemoveOrderBtn
                id={order.id}
                inputDefaultVal={order.quantity}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { CartOrders };
