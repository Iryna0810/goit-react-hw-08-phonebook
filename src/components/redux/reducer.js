import { combineReducers } from "@reduxjs/toolkit";
import { loadContactsReduser } from './contactsLoadSlice'
import { filterReducer } from "./filterSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/auth-slice";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: [`token`],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = combineReducers({
    filter: filterReducer,
    contacts: loadContactsReduser,
    auth: persistedReducer,
})