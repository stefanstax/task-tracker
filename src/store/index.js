import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./rootReducer";
import { createLogger } from "redux-logger";

const logger = createLogger({collapsed: true})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
