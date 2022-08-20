import { Products } from "../Main/Products";

const Men = (props) => {
  const anonOrders = props.anonOrders;
  const setAnonOrders = props.setAnonOrders;

  return (
    <>
      <Products type="men" anonOrders={anonOrders} setAnonOrders={setAnonOrders} />
    </>
  );
};

export { Men };
