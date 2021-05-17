import {createStore, applyMiddleware} from "redux";

import reducer from "./reducer";

import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;