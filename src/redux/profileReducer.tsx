import React from 'react';
import {v1} from "uuid";
import {ActionTypes, PostsType, ProfilePageType} from "./store";

export const AddPostAC = (newPostText: string) => {
    return{
        type: "ADD-POST",
        postText: newPostText
    } as const
}
//export const UpdateNewPostText = (newTextTextarea: string): UpdateNewPostTextActionType  => {
export const UpdateNewPostTextAC = (newTextTextarea: string) => {
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newText: newTextTextarea
    } as const
}

export const propfileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText = action.postText,
                likesCounts: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            break;
    }

    return state
}