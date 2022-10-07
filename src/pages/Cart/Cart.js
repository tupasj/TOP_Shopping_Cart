import { CartOrders } from "./CartOrders";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";
import { UsesRemoveOrderButtonContext } from "../../context/UsesRemoveOrderButtonContext";

const Cart = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const removeOrderByID = props.removeOrderByID;

  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
        <UsesRemoveOrderButtonContext.Provider value={{ itemCount, setItemCount, removeOrderByID }}>
          <CartOrders orders={orders} />
        </UsesRemoveOrderButtonContext.Provider>
        <div className="cart__side-buttons">
          <CartTotal />
          <CartRecommended />
        </div>
      </div>
    </main>
  );
};

export { Cart };
