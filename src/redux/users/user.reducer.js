import { userTypes } from "./userType";

const initialState = {
  currentUser: [],
  loading: false,
  errorMessage: "",
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.SET_USER_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: "",
      });
    case userTypes.SET_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        currentUser: payload,
      });

    case userTypes.SET_USER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload,
      });

    default:
      return state;
  }
};
