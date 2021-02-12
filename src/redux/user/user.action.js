import { auth, signInWithGoogle } from "../../firebase/firebase.config";
import { authTypes } from "./user.types";
import history from "../../utils/history";

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
    history.push("#/app/dashboard");
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithEmailAndPassword = payload => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await auth.signInWithEmailAndPassword(
      payload.email,
      payload.password,
    );
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
    history.push("#/app/dashboard");
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

/************ Register ******************/

export const registerStart = () => ({
  type: authTypes.REGISTER_START,
});
export const registerSuccess = payload => ({
  type: authTypes.REGISTER_SUCCESS,
  payload,
});
export const registerFailure = payload => ({
  type: authTypes.REGISTER_FAILURE,
  payload,
});

export const registerWithEmailAndPassword = payload => async dispatch => {
  try {
    dispatch(registerStart());
    const response = await auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password,
    );
    if (response.user) {
      const user = auth.currentUser;
      await user.updateProfile({ displayName: payload.displayName });
    }
    const {
      displayName,
      email,
      photoURL,
      emailVerified,
      phoneNumber,
    } = response.user;
    dispatch(
      registerSuccess({
        displayName,
        email,
        photoURL,
        emailVerified,
        phoneNumber,
      }),
    );
    history.push("#/app/dashboard");
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const logout = () => async dispatch => {
  await auth.signOut();
  dispatch({ type: authTypes.LOG_OUT_SUCCESS });
  history.push("/login");
};
