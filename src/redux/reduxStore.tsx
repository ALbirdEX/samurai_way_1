import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StoreType = typeof store;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebarFriends: sidebarReducer

})

export const store = createStore(reducers);