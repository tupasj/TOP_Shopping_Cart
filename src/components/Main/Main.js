import { CategoryFilter } from "./CategoryFilter";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { ProductView } from "../Routes";

const Main = (props) => {
  const setItemCount = props.setItemCount;
  const itemCount = props.itemCount;
  const orders = props.orders;
  const setOrders = props.setOrders;
  const addOrder = props.addOrder;

  return (
    <main className="products-view">
      <CategoryFilter />
      <Routes>
        <Route index element={<Products type="men" itemCount={itemCount} setItemCount={setItemCount} orders={orders} setOrders={setOrders} addOrder={addOrder} />} />
        <Route path="/men" element={<Products type="men" itemCount={itemCount} setItemCount={setItemCount} orders={orders} setOrders={setOrders} addOrder={addOrder} />} />
        <Route path="/women" element={<Products type="women" itemCount={itemCount} setItemCount={setItemCount} orders={orders} setOrders={setOrders} addOrder={addOrder} />} />
        <Route path="/brand-new" element={<Products type="brandNew" itemCount={itemCount} setItemCount={setItemCount} orders={orders} setOrders={setOrders} addOrder={addOrder} />} />
        <Route path="/on-sale" element={<Products type="onSale" itemCount={itemCount} setItemCount={setItemCount} orders={orders} setOrders={setOrders} addOrder={addOrder} />} />
        <Route
          path="/product-view/:paramId"
          element={
            <ProductView
              itemCount={itemCount}
              setItemCount={setItemCount}
              orders={orders}
              addOrder={addOrder}
            />
          }
        />
      </Routes>
    </main>
  );
};

export { Main };