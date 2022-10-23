import { useState, useEffect} from "react";
import { Filter } from "./Filter";
import { Routes, Route } from "react-router-dom";
import { ProductView } from "../Routes";
import { UsesCartButtonContext } from "../../context/UsesCartButtonContext";
import { calculateItemCount } from "../../utils/cartUtils";
import { RoutingError } from "../Routes/RoutingError";
import { ProductsAll, ProductsMen, ProductsWomen, ProductsBrandNew, ProductsOnSale } from "../../pages/Products";
import { SearchResults } from "../Routes/SearchResults";

const Main = (props) => {
  const itemCount = props.itemCount;
  const setItemCount = props.setItemCount;
  const orders = props.orders;
  const replaceOrders = props.replaceOrders;
  const addOrder = props.addOrder;
  const searchQuery = props.searchQuery;
  const [filter, setFilter] = useState([]);
  const type = props.type;

  useEffect(() => {
    calculateItemCount(orders, setItemCount);
  })

  return (
    <main className="products-view">
      <Filter filter={filter} setFilter={setFilter} />
        <UsesCartButtonContext.Provider value={{itemCount, setItemCount, orders, replaceOrders, addOrder}}>
            <Routes>
              <Route index element={<ProductsAll filter={filter} />} />
              <Route path="/all" element={<ProductsAll filter={filter} />} />
              <Route path="/men" element={<ProductsMen filter={filter}/>} />
              <Route path="/women" element={<ProductsWomen filter={filter} />} />
              <Route path="/brand-new" element={<ProductsBrandNew filter={filter} />} />
              <Route path="/on-sale" element={<ProductsOnSale filter={filter} />} />
              <Route path="/product-view/:paramId" element={<ProductView />} />
              <Route path={`/results/search_query=${searchQuery}`} element={<SearchResults filter={filter} searchQuery={searchQuery} type={type}/> } />
              <Route path="*" element={<RoutingError />} />
            </Routes>
        </UsesCartButtonContext.Provider>
    </main>
  );
};

export { Main };
