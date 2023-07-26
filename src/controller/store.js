import { legacy_createStore as createStore } from "redux";
import root from "./rootReducer";

const store = createStore(root);

export default store;
