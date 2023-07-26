import { combineReducers } from "redux";
import { cartReducer, favouriteCartReducer } from "./reducer";

const root = combineReducers({
  cartReducer,
  favouriteCartReducer,
});

export default root;
