import { auth } from "../..";

const CartOrders = () => {
  const currentUser = auth.currentUser;
  
  if (currentUser) { // Read from user's orders in database

  } else if (currentUser === null) { // 

  }

  return (
    <div className="orders">
      <div className="order">
        <img className="order__img" src="" alt="lorem ipsum"></img>
        <div className="order__info">
            <span className="order__name">Order name</span>
            <label htmlFor="order__quantity">Quantity: </label>
            <input type="number" id="order__quantity" name="order__quantity" min="1" max="100"></input>
            <button className="order__remove-order">Remove from cart</button>
        </div>
      </div>
      <div className="order">
        <img className="order__img" src="" alt="lorem ipsum"></img>
        <div className="order__info">
            <span className="order__name">Order name</span>
            <label htmlFor="order__quantity">Quantity: </label>
            <input type="number" id="order__quantity" name="order__quantity" min="1" max="100"></input>
            <button className="order__remove-order">Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export { CartOrders };
