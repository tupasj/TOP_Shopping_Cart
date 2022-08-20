import { CartRemoveOrderBtn } from "./CartRemoveOrderBtn";

const CartOrders = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const anonOrders = props.anonOrders;
  const removeOrderByID = props.removeOrderByID;

  let orders;
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
          <CartRemoveOrderBtn
            id={order.id}
            itemCount={itemCount}
            setItemCount={setItemCount}
            removeOrderByID={removeOrderByID}
            inputDefaultVal={order.quantity}
          />
        </div>
      </div>
    );
  });

  return <div className="orders">{orders}</div>;
};

export { CartOrders };
