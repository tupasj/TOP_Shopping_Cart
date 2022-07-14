import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Men, Women, BrandNew, OnSale } from "./components/Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="brand-new" element={<BrandNew />} />
          <Route path="on-sale" element={<OnSale />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
