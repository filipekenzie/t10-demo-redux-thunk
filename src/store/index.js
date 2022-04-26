import { legacy_createStore as createStore, combineReducers } from "redux";
import bananaReducer from "./modules/banana/reducer";

import cartReducer from "./modules/cart/reducer";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  banana: bananaReducer,
});

const store = createStore(reducers);

export default store;
