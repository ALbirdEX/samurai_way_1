import React from 'react';
import {Posts} from "./Post/Posts";
import classes from './MyPosts.module.css'
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsType[]
}

export function MyPosts(props: MyPostsType) {

    const postsElement = props.posts.map(post => <Posts message={post.message} likesCounts={post.likesCounts}/>)

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