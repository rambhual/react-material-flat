import { homeTypes } from "./shop.types";

export const homeStart = () => ({
  type: homeTypes.HOME_START,
});
export const homeSuccess = () => ({
  type: homeTypes.HOME_SUCCESS,
});
export const homeFailure = () => ({
  type: homeTypes.HOME_FAILURE,
});
