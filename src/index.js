import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { showLoginError } from "./errorMessages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Firebase config
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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

const loginEmailPassword = async () => {
  const txtEmail = document.querySelector("#email");
  const txtPassword = document.querySelector("#password");
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
  } catch (error) {
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
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
};

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const loginModalMessage = document.querySelector(".login-modal-message");
      loginModalMessage.textContent = `You are logged in as: ${user.email}`;
    } else {
      console.log(`User: 0`);
    }
  });
};

const logout = async () => {
  await signOut(auth);
  try {
    const loginModalMessage = document.querySelector(".login-modal-message");
    loginModalMessage.textContent =
      "Log in or sign up for the Lorem Ipsum Clothing store";
  } catch (error) {
    console.log(error);
  }
};

// Firebase authentication providers
const signInViaGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
  try {
    console.log('Google sign-in success');
  } catch (error) {
    console.log(error);
  }
};

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

const userWriteOrder = (user, orderArray) => {
  let formattedName = removeSpaces(user.displayName);
  const namePath = `users/${formattedName}/userID`;
  const nameFullRef = ref(database, namePath);
  set(nameFullRef, user.uid);
  const orderPath = `users/${formattedName}/orders`;
  const orderFullRef = ref(database, orderPath);
  set(orderFullRef, orderArray);
};

// Util
const removeSpaces = (str) => {
  return str = str.replace(/\s/g, '');
};

monitorAuthState();

export { loginEmailPassword, createAccount, logout, signInViaGoogle, userWriteOrder, auth, database, removeSpaces };
