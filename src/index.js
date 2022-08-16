import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  // connectAuthEmulator,
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
// connectAuthEmulator(auth, "http://localhost:9099");

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
    // const userCredentials = await signInWithEmailAndPassword(
    //   auth,
    //   loginEmail,
    //   loginPassword
    // );
    // console.log(userCredentials.user);
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
    const currentUser = auth.currentUser;

    if (user) {
      const loginModalMessage = document.querySelector(".login-modal-message");
      loginModalMessage.textContent = `You are logged in as: ${user.email}`;
      console.log(currentUser);
    } else {
      console.log(`User: 0`);
      console.log(currentUser);
    }
  });
};
monitorAuthState();

const logout = async () => {
  await signOut(auth);
  const loginModalMessage = document.querySelector(".login-modal-message");
  loginModalMessage.textContent =
    "Log in or sign up for the Lorem Ipsum Clothing store";
};

// Firebase authentication providers
const signInViaGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  const token = await signInWithPopup(auth, googleProvider);
  try {
    console.log(token);
  } catch (error) {
    console.log(error);
  }
};

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

const userWriteToDatabase = (user, obj) => {
  const path = `users/${user}`;
  const fullRef = ref(database, path);
  set(fullRef, obj);
}

export { loginEmailPassword, createAccount, logout, signInViaGoogle, userWriteToDatabase, auth };
