import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./reducer";

const intialState = {};

const store = createStore(combinedReducers, intialState);

export { store };
