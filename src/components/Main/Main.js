import { CategoryFilter } from "./CategoryFilter";
// import { Products } from "./Products";
import { Routes, Route } from "react-router-dom";
import { Men, Women, BrandNew, OnSale } from "../Navigation";

const Main = () => {
  return (
    <main>
      <CategoryFilter />
      <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/brand-new" element={<BrandNew />} />
        <Route path="/on-sale" element={<OnSale />} />
      </Routes>
    </main>
  );
};

export { Main };
