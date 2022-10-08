import { AuthErrorCodes } from "firebase/auth";

export const showLoginError = (error) => {
    const passWordMessage = document.querySelector('.password-message');
    passWordMessage.style.display = 'block';
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        passWordMessage.textContent = 'Wrong password. Try again.';
    } else {
        passWordMessage.textContent = `(Error) ${error.message}`;
    };
};
