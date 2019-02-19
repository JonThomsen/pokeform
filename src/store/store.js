import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import formReducer from "../reducers/formReducer";

const middleware = applyMiddleware(promise, thunk, logger);

export default createStore(formReducer, middleware);
