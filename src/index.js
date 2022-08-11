import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { showLoginError } from "./errorMessages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyA-2GRc8LpTMEoz0o3-N-0Y2wX4Ij-AasU",
  authDomain: "shopping-cart-27e1d.firebaseapp.com",
  databaseURL: "https://shopping-cart-27e1d-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-27e1d",
  storageBucket: "shopping-cart-27e1d.appspot.com",
  messagingSenderId: "144721472838",
  appId: "1:144721472838:web:42d587e4e6fda3cb058947",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
  const txtEmail = document.querySelector("#email");
  const txtPassword = document.querySelector("#password");
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredentials.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
};

const createAccount = async () => {
  const txtEmail = document.querySelector("#email");
  const txtPassword = document.querySelector("#password");
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredentials.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const loginModalMessage = document.querySelector('.login-modal-message');
      loginModalMessage.textContent = `You are logged in as: ${user.email}`;
    } else {
      console.log(`User: 0`);
    }
  })
}
monitorAuthState();

const logout = async () => {
  await signOut(auth);
  const loginModalMessage = document.querySelector('.login-modal-message');
  loginModalMessage.textContent = 'Log in or sign up for the Lorem Ipsum Clothing store';
}

export { loginEmailPassword, createAccount, logout };
