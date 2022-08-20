import {combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {nihongoModeReducer} from "./nihongoModeReducer";
import {showNumberReducer} from "./showNumberReducer";
import {linesReducer} from "./linesReducer";
import {firebaseCollectionsReducer} from "./firebaseCollectionsReducer";
import {activeCollectionReducer} from "./activeCollectionReducer";

const reducer = combineReducers({
    auth: authReducer,
    nihongoMode: nihongoModeReducer,
    showNumber: showNumberReducer,
    lines: linesReducer,
    firebaseCollections: firebaseCollectionsReducer,
    activeCollection: activeCollectionReducer,
})

export const store = createStore(reducer, composeWithDevTools());