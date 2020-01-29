import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
//import { apiMiddleware } from 'redux-api-middleware';
import api from "../middleware/api";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, api, reduxImmutableStateInvariant()))
  );
}
