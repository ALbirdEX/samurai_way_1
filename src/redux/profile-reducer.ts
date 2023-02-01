import {v1} from "uuid";

export type ProfileInfoType = {
    aboutMe: string | null | undefined
    contacts: {
        facebook: string | null | undefined
        website: string | null | undefined
        vk: string | null | undefined
        twitter: string | null | undefined
        instagram: string | null | undefined
        youtube: string | null | undefined
        github: string | null | undefined
        mainLink: string | null | undefined
    }
    lookingForAJob: boolean | null | undefined
    lookingForAJobDescription: string | null | undefined
    fullName: string | null | undefined
    userId: number | null | undefined
    photos: {
        small: string
        large: string
    }
}

export type PostsType = {
    id: string,
    message: string,
    likesCounts: number
}


export type ProfilePageType = {
    newPostText: string,
    posts: PostsType[],
    profileInfo: ProfileInfoType | null
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
        {id: v1(), message: "Yo", likesCounts: 3}
    ],
    profileInfo: null
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
        case "SET-USER-PROFILE": {
            debugger
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        }
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

export const updateNewPostTextAC = (newTextTextarea: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newTextTextarea
    } as const
}

export const setUserProfile = (profileInfo: ProfileInfoType | null) => {
    debugger
    return {
        type: "SET-USER-PROFILE",
        profileInfo: profileInfo
    } as const
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>