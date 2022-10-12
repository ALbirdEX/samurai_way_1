import React from 'react';
import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={classes.menu}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={`${classes.item} ${classes.active}`}><a>Message</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Setting</a></div>
        </nav>
    );
}