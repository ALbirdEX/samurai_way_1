import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {New} from "./components/New/New";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";


type AppPropsType = {
    store: StoreType
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
                    <Route path={"/dialogs/*"} element={<Dialogs dialogsState={state.dialogPage}
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