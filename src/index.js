import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-2GRc8LpTMEoz0o3-N-0Y2wX4Ij-AasU",
  authDomain: "shopping-cart-27e1d.firebaseapp.com",
  databaseURL: "https://shopping-cart-27e1d-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-27e1d",
  storageBucket: "shopping-cart-27e1d.appspot.com",
  messagingSenderId: "144721472838",
  appId: "1:144721472838:web:42d587e4e6fda3cb058947"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
