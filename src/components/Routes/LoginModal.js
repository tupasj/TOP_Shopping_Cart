import { loginEmailPassword, createAccount, logout, signInViaGoogle } from "../..";
import { GoogleButton } from 'react-google-button';

const LoginModal = () => {
  const closeLoginModal = () => {
    const loginModal = document.querySelector('.login-modal');
    loginModal.close();
  }

  return (
    <dialog className="login-modal">
        <span className="modal-close" onClick={closeLoginModal}>X</span>
        <p className="login-modal-message">Log in or sign up for the Lorem Ipsum Clothing store</p>
        <form method="dialog">
            <label htmlFor="email">
              <input type="email" id="email" name="email" placeholder="Email"></input>
            </label>
            <label htmlFor="password">
              <input type="password" id="password" name="password" placeholder="Password"></input>
            </label>
            <div className="password-message"></div>
            <div className="button-group">
              <button className="login-button" onClick={loginEmailPassword}>Log In</button>
              <button className="signup-button" onClick={createAccount}>Sign Up</button>
              <button className="logout-button" onClick={logout}>Log Out</button>
            </div>
            <GoogleButton className="google-button" onClick={signInViaGoogle} />
        </form>
    </dialog>
  );
};

export { LoginModal };
