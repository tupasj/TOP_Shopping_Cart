import { firebaseApp } from "../FirebaseServices/firebaseConfig";
import { showLoginError } from "../errorMessages";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// Firebase auth state observer
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) { // Retrieve user's orders when they sign in
      const loginModalMessage = document.querySelector(".login-modal-message");
      loginModalMessage.textContent = `You are logged in as: ${user.email}`;
    } else { // Empty the cart when logging out
      console.log(`User: 0`);
    }
  });
};
monitorAuthState();

const loginEmailPassword = async (e) => {
  e.preventDefault();
  const txtEmail = document.querySelector("#email");
  const txtPassword = document.querySelector("#password");
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
};

const createAccount = async (e) => {
  e.preventDefault();
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


const logout = async () => {
  const updateModalText = () => {
    try {
      const loginModalMessage = document.querySelector(".login-modal-message");
      loginModalMessage.textContent =
        "Log in or sign up for the Lorem Ipsum Clothing store";
    } catch (error) {
      console.log(error);
    }
  }
  
  await signOut(auth);
  updateModalText();
};

// Firebase authentication providers
const signInViaGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
  try {
    console.log("Google sign-in success");
  } catch (error) {
    console.log(error);
  }
};

export {
  auth,
  loginEmailPassword,
  createAccount,
  logout,
  signInViaGoogle,
};
