import React, {ChangeEvent} from 'react';
import {Posts} from "./Post/Posts";
import classes from './MyPosts.module.css'
import {ActionTypes, PostsType} from "../../../redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

/*const UpdateNewPostTextActionCreater = (e) => {
    return{
        type: "UPDATE-NEW-POST-TEXT", newText: event.currentTarget.value
    }
}*/

export function MyPosts(props: MyPostsType) {

    const postsElement = props.posts.map(post => <Posts key={post.id}
                                                        message={post.message}
                                                        likesCounts={post.likesCounts}/>);

    const newPostTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newTextTextarea = event.currentTarget.value
        props.dispatch(UpdateNewPostTextAC(newTextTextarea))
        //props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText:newTextTextarea})
    };
    const addPost = () => {
        props.dispatch(AddPostAC(props.newPostText))
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