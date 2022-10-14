import { useState, useEffect} from "react";
import { CategoryFilter } from "./CategoryFilter";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { calculateItemCount } from "../../utils/cartUtils";
import { RoutingError } from "../Routes/RoutingError";
import { ProductsAll, ProductsMen, ProductsWomen, ProductsBrandNew, ProductsOnSale } from "../../pages/Products";

const Main = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.replaceOrders;
  const addOrder = props.addOrder;
  const searchQuery = props.searchQuery;
  const setSearchQuery = props.setSearchQuery;
  const [filter, setFilter] = useState();
  const type = props.type;

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  })

  return (
    <main className="products-view">
      <CategoryFilter setFilter={setFilter} />
        <UsesCartButtonContext.Provider value={{itemCount, setItemCount, orders, replaceOrders, addOrder}}>
          <ProductFilterContext.Provider value={{searchQuery, setSearchQuery, filter}}>
            <Routes>
              <Route index element={<ProductsAll />} />
              <Route path="/all" element={<ProductsAll />} />
              <Route path="/men" element={<ProductsMen />} />
              <Route path="/women" element={<ProductsWomen />} />
              <Route path="/brand-new" element={<ProductsBrandNew />} />
              <Route path="/on-sale" element={<ProductsOnSale />} />
              <Route path="/product-view/:paramId" element={<ProductView />} />
              <Route path={`/results/search_query=${searchQuery}`} element={<Products type={type} /> } />
              <Route path="*" element={<RoutingError />} />
            </Routes>
          </ProductFilterContext.Provider>
        </UsesCartButtonContext.Provider>
    </main>
  );
};

export { Main };
