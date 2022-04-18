import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { rootSaga } from "./Sagas";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./Reducers";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({ basename: "/" });
const sagaMiddleware = createSagaMiddleware();

export function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(createRootReducer(history), preloadedState, composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}
