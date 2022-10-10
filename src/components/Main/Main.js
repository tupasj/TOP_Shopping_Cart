import { CategoryFilter } from "./CategoryFilter";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { useEffect } from "react";
import { calculateItemCount } from "../../utils/cartUtils";

const Main = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.replaceOrders;
  const addOrder = props.addOrder;

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  })

  return (
    <main className="products-view">
      <CategoryFilter />
      <UsesCartButtonContext.Provider value={{itemCount, setItemCount, orders, replaceOrders, addOrder}}>
        <Routes>
          <Route index element={<Products type="men" />} />
          <Route path="/men" element={<Products type="men" />} />
          <Route path="/women" element={<Products type="women" />} />
          <Route path="/brand-new" element={<Products type="brandNew" />} />
          <Route path="/on-sale" element={<Products type="onSale" />} />
          <Route path="/product-view/:paramId" element={<ProductView />} />
        </Routes>
      </UsesCartButtonContext.Provider>
    </main>
  );
};

export { Main };