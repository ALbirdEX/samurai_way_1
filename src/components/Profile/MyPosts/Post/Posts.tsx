import React from 'react';
import classes from './Posts.module.css'

type PropsType = {
    message: string
    likesCounts: number
}

export function Posts(props: PropsType) {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avtar_icon"/>
                {props.message}
            </div >
            <span>Like: <span className={classes.likeCounts}>{props.likesCounts}</span></span>
        </div>
    );
}