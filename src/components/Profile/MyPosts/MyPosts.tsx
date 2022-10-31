import React from 'react';
import {Posts} from "./Post/Posts";
import classes from './MyPosts.module.css'

export function MyPosts() {
    return (
        <div className={classes.postsItem}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>input</textarea>
                </div>
                <div>
                    <button>Add POST</button>
                </div>
            </div>
            <div>New post</div>
            <div className={classes.postsBlock}>
                <Posts message="Yo" likesCounts={3}/>
                <Posts message="I is good" likesCounts={2}/>
                <Posts message=":)" likesCounts={5}/>
            </div>
        </div>
    );
}