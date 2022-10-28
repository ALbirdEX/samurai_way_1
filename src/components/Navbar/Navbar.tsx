import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={classes.menu}>
            <div className={classes.item}><NavLink to={"/profile"}>Profile</NavLink></div>
            <div className={`${classes.item} ${classes.active}`}><NavLink to={"/dialog"}>Message</NavLink></div>
            <div className={classes.item}><NavLink to={"/new"}>New</NavLink></div>
            <div className={classes.item}><NavLink to={"/music"}>Music</NavLink></div>
            <div className={classes.item}><NavLink to={"/settings"}>Settings</NavLink></div>
        </nav>
    );
}