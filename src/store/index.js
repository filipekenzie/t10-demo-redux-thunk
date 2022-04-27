import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import bananaReducer from "./modules/banana/reducer";
import thunk from "redux-thunk";

import cartReducer from "./modules/cart/reducer";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  banana: bananaReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
