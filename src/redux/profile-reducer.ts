import {v1} from "uuid";


export type PostsType = {
    id: string,
    message: string,
    likesCounts: number
}
export type ProfilePageType = {
    newPostText: string
    posts: PostsType[]
    //profile: any               //fix
}

export type ProfileActionType =
    AddPostActionType
    | UpdateNewPostActionType
    | SetUserProfileActionType


const initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: v1(), message: "Yo", likesCounts: 3},
        {id: v1(), message: ":)", likesCounts: 3},
        {id: v1(), message: "I is good", likesCounts: 3},
        {id: v1(), message: "Yo", likesCounts: 3},
        {id: v1(), message: "Yo", likesCounts: 3},],
    //profile: null
}

export const profileReducer = (state: ProfilePageType = initialState,
                               action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText = action.postText,
                likesCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
       /* case "SET-USER-PROFILE": {
            return {...state,
                profile: action.profile
            }
        }*/
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        postText: newPostText
    } as const
}

//export const UpdateNewPostText = (newTextTextarea: string): UpdateNewPostTextActionType  => {
export const updateNewPostTextAC = (newTextTextarea: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newTextTextarea
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
