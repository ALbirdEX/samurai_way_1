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
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

export function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.sidebarFriends.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/profile"} element={<Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path={"/dialogs/*"} element={<Dialogs dialogsSate={props.state.dialogPage}/>}/>
                    <Route path={"/new"} element={<New/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}