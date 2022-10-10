import { useEffect, useState, useReducer } from "react";
import { ordersReducer } from "./reducers/ordersReducer";
import { HashRouter, Routes, Route } from "react-router-dom";
// Firebase
import { ref, get } from "firebase/database";
import { auth } from "./FirebaseServices/firebaseAuth";
import { database, userWriteOrder } from "./FirebaseServices/firebaseDatabase";
import { removeSpaces } from "./utils/stringUtils";
//
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/UI";
import { Cart } from "./pages/Cart/Cart";

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

  const replaceOrders = (orderArray) => {
    dispatch({
      type: "set",
      newOrders: orderArray,
    });
  };

  const modifyOrderQuantityOnChange = (e, order) => {
    dispatch({
      type: "change quantity",
      payload: {
        id: order.id,
        quantity: e.target.valueAsNumber,
      },
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
              replaceOrders={replaceOrders}
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
              replaceOrders={replaceOrders}
              removeOrder={removeOrder}
              modifyOrderQuantityOnChange={modifyOrderQuantityOnChange}
            />
          }
        />
      </Routes>
      <LoginModal replaceOrders={replaceOrders} setItemCount={setItemCount} />
    </HashRouter>
  );
};

export { App };
