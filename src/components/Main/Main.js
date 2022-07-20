import { CategoryFilter } from "./CategoryFilter";
import { Routes, Route } from "react-router-dom";
import { Men, Women, BrandNew, OnSale, ProductView } from "../Navigation";

const Main = () => {
  return (
    <main>
      <CategoryFilter />
      <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/brand-new" element={<BrandNew />} />
        <Route path="/on-sale" element={<OnSale />} />
        <Route path="/product-view/:paramId" element={<ProductView />} />
      </Routes>
    </main>
  );
};

export { Main };
