import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./reducer";

const intialState = {};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(combinedReducers, intialState, bindMiddleware([]));

export { store };
