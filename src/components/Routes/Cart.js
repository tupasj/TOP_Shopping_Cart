import { Orders } from "./Orders";
import { CartTotal } from "./CartTotal";
import { CartRecommended } from "./CartRecommended";

const Cart = () => {
  return (
    <main className="cart">
      <div className="cart__title">Your Cart</div>
      <div className="cart__container">
        <Orders />
        <CartTotal />
        <CartRecommended />
      </div>
    </main>
  );
};

export { Cart };
