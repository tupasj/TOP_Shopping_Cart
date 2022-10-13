import { useEffect } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { calculateItemCount } from "../../utils/cartUtils";
import { RoutingError } from "../Routes/RoutingError";

const Main = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.replaceOrders;
  const addOrder = props.addOrder;
  const filter = props.filter;
  const setFilter = props.setFilter;
  const type = props.type;

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  })

  return (
    <main className="products-view">
      <CategoryFilter setFilter={setFilter} />
        <UsesCartButtonContext.Provider value={{itemCount, setItemCount, orders, replaceOrders, addOrder}}>
          <Routes>
            <Route index element={<Products type="all" filter={filter} />} />
            <Route path="/index" element={<Products type="all" filter={filter} />} />
            <Route path="/men" element={<Products type="men" filter={filter} />} />
            <Route path="/women" element={<Products type="women" filter={filter} />} />
            <Route path="/brand-new" element={<Products type="brandNew" filter={filter} />} />
            <Route path="/on-sale" element={<Products type="onSale" filter={filter} />} />
            <Route path="/product-view/:paramId" element={<ProductView />} />
            <Route path={`/results/search_query=${filter}`} element={<Products type={type} filter={filter} /> } />
            <Route path="*" element={<RoutingError />} />
          </Routes>
        </UsesCartButtonContext.Provider>
    </main>
  );
};

export { Main };
