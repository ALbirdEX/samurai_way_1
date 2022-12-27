import React from 'react';
import {PostsType} from "../../../redux/store";
import {AddPostAC, ProfileActionType, UpdateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ProfileActionType) => void
}

export function MyPostsContainer(props: MyPostsContainerType) {
    const newPostTextHandler = (newTextTextarea: string) => {
        props.dispatch(UpdateNewPostTextAC(newTextTextarea))
    };
    const addPost = (newText: string) => {
        props.dispatch(AddPostAC(newText))
    }

    return (
        <MyPosts posts={props.posts}
                 postText={newPostTextHandler}
                 addPost={addPost}
                 newPostText={props.newPostText}/>
    )
}