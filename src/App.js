import { HashRouter } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/Routes";
import { Cart } from "./components/Routes/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [anonOrders, setAnonOrders] = useState([]);

  const addAnonOrder = (newOrder) => {
    setAnonOrders([...anonOrders, newOrder]);
  };

  const removeOrderByID = (id) => {
    setAnonOrders(anonOrders.filter(order => order.id !== id));
  };

  return (
    <HashRouter baseName='/TOP_Shopping_Cart'>
      <Header itemCount={itemCount} />
      <Navigation />
      <Routes>
        <Route path="/*" element={<Main itemCount={itemCount} setItemCount={setItemCount} addAnonOrder={addAnonOrder} />} />
        <Route path="/cart" element={<Cart itemCount={itemCount} setItemCount={setItemCount} anonOrders={anonOrders} removeOrderByID={removeOrderByID} />} />
      </Routes>
      <LoginModal />
    </HashRouter>
  );
};

export { App };
