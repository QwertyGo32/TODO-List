import {combineReducers, compose, createStore} from "redux";
import {toDoReducer} from "./reducers/todo";

const rootReducer = combineReducers({todo: toDoReducer});
const composeEnhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)
export const store = createStore(rootReducer, composeEnhancers);

