import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={classes.menu}>
            <div className={classes.item}>
                <NavLink to={"/profile"}
                         className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs/"}
                         className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/new"}
                         className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>New</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/music"}
                         className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/settings"}
                         className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Settings</NavLink>
            </div>
        </nav>
        /* <nav className={classes.menu}>
             <div className={classes.item || classes.active}><a href={"/profile"}>Profile</a></div>
             <div className={`${classes.item} ${classes.active}`}><a href={"/dialog"}>Message</a></div>
             <div className={classes.item}><a href={"/new"}>New</a></div>
             <div className={classes.item}><a href={"/music"}>Music</a></div>
             <div className={classes.item}><a href={"/settings"}>Settings</a></div>
          </nav>*/
    );
}