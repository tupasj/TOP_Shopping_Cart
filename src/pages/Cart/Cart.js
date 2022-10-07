import { useState } from "react";
import { CartOrders } from "./CartOrders";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";
import { UsesRemoveOrderButtonContext } from "../../context/UsesRemoveOrderButtonContext";

const Cart = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const removeOrderByID = props.removeOrderByID;

  const [ subtotal, setSubtotal ] = useState('0.00');

  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
        <UsesRemoveOrderButtonContext.Provider value={{ itemCount, setItemCount, removeOrderByID }}>
          <CartOrders orders={orders} setSubtotal={setSubtotal} />
        </UsesRemoveOrderButtonContext.Provider>
        <div className="cart__side-buttons">
          <CartTotal subtotal={subtotal} />
          <CartRecommended />
        </div>
      </div>
    </main>
  );
};

export { Cart };
