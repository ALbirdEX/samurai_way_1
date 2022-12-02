import React, {ChangeEvent} from 'react';
import {Posts} from "./Post/Posts";
import classes from './MyPosts.module.css'
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsType) {

    const postsElement = props.posts.map(post => <Posts key={post.id}
                                                        message={post.message}
                                                        likesCounts={post.likesCounts}/>);
    const newPostTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    };
    const addPost = () => {
        props.addPost(props.newPostText);
    }

    return (
        <div className={classes.postsItem}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={newPostTextHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add POST</button>
                </div>
            </div>
            <div>New post</div>
            <div className={classes.postsBlock}>
                {postsElement}
            </div>
        </div>
    )
}