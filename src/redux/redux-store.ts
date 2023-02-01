import {combineReducers, legacy_createStore as createStore} from 'redux'
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebarr-educer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebarFriends: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);