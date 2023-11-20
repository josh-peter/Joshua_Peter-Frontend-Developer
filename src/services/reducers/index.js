import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import getRocketReducers from "../reducers/rockets/getRocketsReducer.ts"

export const rootReducer = combineReducers({
    rockets: getRocketReducers

});

const config = {
    key: 'whitelisted-reducers',
    storage
}

export const persistedRootReducer = persistReducer(config, rootReducer);