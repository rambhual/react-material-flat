import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./user/user.reducer";
import { homeReducer } from "./home/home.reducer";
import { shopReducer } from "./shop/shop.reducer";
import { cartReducer } from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"],
};

const rootReducer = combineReducers({
  user: authReducer,
  home: homeReducer,
  shop: shopReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
