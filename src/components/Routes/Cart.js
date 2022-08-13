import { CartOrders } from "./CartOrders";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";

const Cart = () => {
  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
        <CartOrders />
        <div className="cart__side-buttons">
          <CartTotal />
          <CartRecommended />
        </div>
      </div>
    </main>
  );
};

export { Cart };
