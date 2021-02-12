import { auth, signInWithGoogle } from "../../firebase/firebase.config";
import { authTypes } from "./user.types";

export const loginStart = () => ({
  type: authTypes.LOGIN_START,
});
export const loginSuccess = payload => ({
  type: authTypes.LOGIN_SUCCESS,
  payload,
});
export const loginFailure = payload => ({
  type: authTypes.LOGIN_FAILURE,
  payload,
});

export const loginWithGoogle = () => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await signInWithGoogle();
    const {
      displayName,
      email,
      photoURL,
      emailVerified,
      phoneNumber,
    } = response.user;
    dispatch(
      loginSuccess({
        displayName,
        email,
        photoURL,
        emailVerified,
        phoneNumber,
      }),
    );
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithEmailAndPassword = (
  email,
  password,
) => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await auth.signInWithEmailAndPassword(email, password);
    const {
      displayName,
      email,
      photoURL,
      emailVerified,
      phoneNumber,
    } = response.user;
    dispatch(
      loginSuccess({
        displayName,
        email,
        photoURL,
        emailVerified,
        phoneNumber,
      }),
    );
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
