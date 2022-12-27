import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {New} from "./components/New/New";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/reduxStore";
import {ProfileActionType} from "./redux/profileReducer";
import {DialogActionType} from "./redux/dialogsReducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: StoreType,
    dispatch: (action: ProfileActionType | DialogActionType) => void
}

export const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.sidebarFriends.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/profile"} element={<Profile posts={state.profilePage.posts}
                                                               dispatch={props.store.dispatch.bind(props.store)}
                                                               newPostText={state.profilePage.newPostText}/>}/>
                    <Route path={"/dialogs/*"} element={<DialogsContainer dialogsState={state.dialogPage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 newMessageBody={state.dialogPage.newMessageBody}/>}/>
                    <Route path={"/new"} element={<New/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}