import {v1} from "uuid";
import {ActionTypes} from "./store";

export type PostsType = {
    id: string,
    message: string,
    likesCounts: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type InitialStateType = typeof  initialState

const initialState = {
    newPostText: "Напиши свой пост",
    posts: [
        {id: v1(), message: "Yo", likesCounts: 3},
        {id: v1(), message: ":)", likesCounts: 3},
        {id: v1(), message: "I is good", likesCounts: 3},
        {id: v1(), message: "Yo", likesCounts: 3},
        {id: v1(), message: "Yo", likesCounts: 3},] as PostsType[]
}

export const profileReducer = (state: InitialStateType = initialState,
                               action: ActionTypes): InitialStateType => {
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

export const AddPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        postText: newPostText
    } as const
}

//export const UpdateNewPostText = (newTextTextarea: string): UpdateNewPostTextActionType  => {
export const UpdateNewPostTextAC = (newTextTextarea: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newTextTextarea
    } as const
}

type AddPostActionType = ReturnType<typeof AddPostAC>
type UpdateNewPostActionType = ReturnType<typeof UpdateNewPostTextAC>

export type ProfileActionType = AddPostActionType | UpdateNewPostActionType