import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhances = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhances);
