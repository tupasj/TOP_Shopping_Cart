import { useEffect } from "react";
import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";

const CartOrders = (props) => {
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const setSubtotal = props.setSubtotal;
  const modifyOrderQuantityOnChange = props.modifyOrderQuantityOnChange;

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

  const calculateItemCount = () => {
    const quantityArray = orders.map((order) => order.quantity);
    const initialValue = 0;
    const quantitySum = quantityArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    setItemCount(quantitySum);
  };

  useEffect(() => {
    calculateSubtotal();
    calculateItemCount();
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
                onChange={(e) => {
                  modifyOrderQuantityOnChange(e, order);
                }}
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
