import {combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {nihongoModeReducer} from "./nihongoModeReducer";

const reducer = combineReducers({
    auth: authReducer,
    nihongoMode: nihongoModeReducer,
})

export const store = createStore(reducer, composeWithDevTools());