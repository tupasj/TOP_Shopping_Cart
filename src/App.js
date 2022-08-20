import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { auth, userWriteOrder } from ".";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/Routes";
import { Cart } from "./components/Routes/Cart";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [anonOrders, setAnonOrders] = useState([]);

  const addAnonOrder = (newOrder) => {
    setAnonOrders([...anonOrders, newOrder]);
  };

  const removeOrderByID = (id) => {
    setAnonOrders(anonOrders.filter((order) => order.id !== id));
  };

  useEffect(() => {
    if (auth.currentUser) {
      try {
        userWriteOrder(auth.currentUser, anonOrders);
      } catch (error) {
        console.log(error);
      };
    };
    // console.log('anonOrders update:');
    // console.log(anonOrders);
  }, [anonOrders]);

  return (
    <HashRouter baseName="/TOP_Shopping_Cart">
      <Header itemCount={itemCount} />
      <Navigation />
      <Routes>
        <Route
          path="/*"
          element={
            <Main
              itemCount={itemCount}
              setItemCount={setItemCount}
              anonOrders={anonOrders}
              setAnonOrders={setAnonOrders}
              addAnonOrder={addAnonOrder}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              itemCount={itemCount}
              setItemCount={setItemCount}
              anonOrders={anonOrders}
              setAnonOrders={setAnonOrders}
              removeOrderByID={removeOrderByID}
            />
          }
        />
      </Routes>
      <LoginModal />
    </HashRouter>
  );
};

export { App };
