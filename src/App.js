import { useEffect, useState, useReducer } from "react";
import { ordersReducer } from "./reducers/ordersReducer";
import { HashRouter, Routes, Route } from "react-router-dom";
import { auth, database, userWriteOrder, removeSpaces } from ".";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/UI";
import { Cart } from "./pages/Cart/Cart";
import { ref, get } from "firebase/database";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [orders, dispatch] = useReducer(ordersReducer, []);

  const addOrder = (order) => {
    dispatch({
      type: "added",
      newOrder: order,
    });
  };

  const removeOrder = (orderId) => {
    dispatch({
      type: "deleted",
      id: orderId,
    });
  };

  const setOrders = (orderArray) => {
    dispatch({
      type: "set",
      newOrders: orderArray,
    });
  };

  useEffect(() => {
    console.log("get database data");
    const retrieveOrderData = () => {
      const user = auth.currentUser;
      const formattedName = removeSpaces(user.displayName);
      const orderPath = `users/${formattedName}/orders`;
      const orderFullRef = ref(database, orderPath);
      get(orderFullRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("snapshot: ");
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (auth.currentUser) {
      try {
        retrieveOrderData();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    if (auth.currentUser) {
      try {
        userWriteOrder(auth.currentUser, orders);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log('orders update:');
    // console.log(orders);
  }, [orders]);

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
              orders={orders}
              setOrders={setOrders}
              addOrder={addOrder}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              itemCount={itemCount}
              setItemCount={setItemCount}
              orders={orders}
              setOrders={setOrders}
              removeOrder={removeOrder}
            />
          }
        />
      </Routes>
      <LoginModal />
    </HashRouter>
  );
};

export { App };
