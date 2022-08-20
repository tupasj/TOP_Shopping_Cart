import { CartOrders } from "./CartOrders";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";

const Cart = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const anonOrders = props.anonOrders;
  const setAnonOrders = props.setAnonOrders;
  const removeOrderByID = props.removeOrderByID;

  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
        <CartOrders
          itemCount={itemCount}
          setItemCount={setItemCount}
          anonOrders={anonOrders}
          setAnonOrders={setAnonOrders}
          removeOrderByID={removeOrderByID}
        />
        <div className="cart__side-buttons">
          <CartTotal />
          <CartRecommended />
        </div>
      </div>
    </main>
  );
};

export { Cart };
