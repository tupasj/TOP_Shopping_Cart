import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { App } from "./App";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/" element={<Navigate replace to="/men" />} />
      </Routes>
    </HashRouter>
  );
};

export { Router };