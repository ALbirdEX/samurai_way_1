import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {New} from "./components/New/New";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";


/*type AppPropsType = {
    store: StoreType,
    dispatch: (action: ProfileActionType | DialogActionType) => void
}*/

export const App: React.FC = () => {

        //const state = props.store.getState()

        return (
            <div className="app-wrapper">
                <Header/>
                <Navbar
                    //friends={state.sidebarFriends.friends}
                />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={"/profile"} element={<Profile
                             /* posts={state.profilePage.posts}
                              dispatch={props.store.dispatch.bind(props.store)}
                              newPostText={state.profilePage.newPostText}*/
                        />}/>
                        <Route path={"/users"} element={<UsersContainer/>}/>
                        <Route path={"/dialogs/*"} element={<DialogsContainer
                            /*dialogsState={state.dialogPage}
                            dispatch={props.store.dispatch.bind(props.store)}
                            newMessageBody={state.dialogPage.newMessageBody}*/
                        />}/>
                        <Route path={"/new"} element={<New/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/settings"} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }