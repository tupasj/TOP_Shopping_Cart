import { auth } from "../..";

const CartOrders = (props) => {
  const anonOrders = props.anonOrders;
  const currentUser = auth.currentUser;

  const displayOrders = () => {
    let orders;
    if (currentUser) {
  
    } else if (currentUser === null) {
      orders = anonOrders.map((order) => {
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
                type="number"
                id="order__quantity"
                name="order__quantity"
                min="1"
                max="100"
                defaultValue={order.quantity}
              ></input>
              <button className="order__remove-order">Remove from cart</button>
            </div>
          </div>
        );
      });
    };
    return orders;
  }

  const orders = displayOrders();
  return <div className="orders">{orders}</div>;
};

export { CartOrders };
