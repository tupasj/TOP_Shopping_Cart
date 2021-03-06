import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { App } from "./App";

const Router = () => {
  return (
    <BrowserRouter baseName={'//tupasj.github.io/TOP_Shopping_Cart'}>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/" element={<Navigate replace to="/men" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };