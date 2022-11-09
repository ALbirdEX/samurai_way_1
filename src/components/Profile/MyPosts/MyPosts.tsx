import React from 'react';
import {Posts} from "./Post/Posts";
import classes from './MyPosts.module.css'

export function MyPosts() {

    const posts = [
        {id: 1, message: "Yo", likesCounts: 3},
        {id: 2, message: ":)", likesCounts: 3},
        {id: 3, message: "I is good", likesCounts: 3},
        {id: 4, message: "Yo", likesCounts: 3},
        {id: 5, message: "Yo", likesCounts: 3},
    ]

    const postsElement = posts.map(post => <Posts message={post.message} likesCounts={post.likesCounts}/>)

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
                {postsElement}
            </div>
        </div>
    );
}