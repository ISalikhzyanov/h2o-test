import {combineReducers} from "redux";
import {tableReducer} from "./tableReducer";
import {appReducers} from "./appReducers";

export const rootReducer = combineReducers({
    table: tableReducer,
    app: appReducers
})
