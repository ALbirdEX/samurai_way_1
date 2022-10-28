import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={classes.menu}>
            <div className={classes.item}><a><NavLink to={"/profile"}>Profile</NavLink></a></div>
            <div className={`${classes.item} ${classes.active}`}><a><NavLink to={"/dialog"}>Message</NavLink></a></div>
            <div className={classes.item}><a><NavLink to={"/new"}>New</NavLink></a></div>
            <div className={classes.item}><a><NavLink to={"/music"}>Music</NavLink></a></div>
            <div className={classes.item}><a><NavLink to={"/settings"}>Settings</NavLink></a></div>
        </nav>
    );
}