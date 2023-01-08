import {legacy_createStore as createStore} from 'redux'
import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

//export type StoreType = typeof store;


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebarFriends: sidebarReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);