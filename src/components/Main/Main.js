import { CategoryFilter } from "./CategoryFilter";
import { Routes, Route } from "react-router-dom";
import { Men, Women, BrandNew, OnSale, ProductView } from "../Routes";

const Main = (props) => {
  const setItemCount = props.setItemCount;
  const itemCount = props.itemCount;
  const anonOrders = props.anonOrders;
  const setAnonOrders = props.setAnonOrders;
  const addAnonOrder = props.addAnonOrder;

  return (
    <main className="products-view">
      <CategoryFilter />
      <Routes>
        <Route index element={<Men anonOrders={anonOrders} setAnonOrders={setAnonOrders} />} />
        <Route path="/men" element={<Men anonOrders={anonOrders} setAnonOrders={setAnonOrders} />} />
        <Route path="/women" element={<Women />} />
        <Route path="/brand-new" element={<BrandNew />} />
        <Route path="/on-sale" element={<OnSale />} />
        <Route
          path="/product-view/:paramId"
          element={
            <ProductView
              itemCount={itemCount}
              setItemCount={setItemCount}
              anonOrders={anonOrders}
              addAnonOrder={addAnonOrder}
            />
          }
        />
      </Routes>
    </main>
  );
};

export { Main };
