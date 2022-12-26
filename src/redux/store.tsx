import {v1} from "uuid";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogActionType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type FriendsType = {
    id: string,
    name: string,
}
export type MessagesType = {
    id: string,
    message: string
}
export type DialogsType = {
    id: string,
    name: string,
}
export type PostsType = {
    id: string,
    message: string,
    likesCounts: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody: string
}
export type SidebarFriendsType = {
    friends: FriendsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType,
    sidebarFriends: SidebarFriendsType,
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void        //методы, ране ф-и

    dispatch: (action: ActionTypes) => void
}

/*
export type ActionTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyAC>
    | ReturnType<typeof SendMessageAC>
*/

export type ActionTypes = ProfileActionType | DialogActionType


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "Напиши свой пост",
            posts: [
                {id: v1(), message: "Yo", likesCounts: 3},
                {id: v1(), message: ":)", likesCounts: 3},
                {id: v1(), message: "I is good", likesCounts: 3},
                {id: v1(), message: "Yo", likesCounts: 3},
                {id: v1(), message: "Yo", likesCounts: 3},]
        },
        dialogPage: {
            dialogs: [
                {id: v1(), name: "Alex"},
                {id: v1(), name: "Igor"},
                {id: v1(), name: "Kostia"},
                {id: v1(), name: "leha"},
                {id: v1(), name: "Kiril"},
            ],

            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "What is you name"},
                {id: v1(), message: ")))))"},
            ],

            newMessageBody: ""

        },
        sidebarFriends: {
            friends: [
                {id: v1(), name: "Alex"},
                {id: v1(), name: "Igor"},
                {id: v1(), name: "Kostia"},
                {id: v1(), name: "leha"},
                {id: v1(), name: "Kiril"},
            ]
        }
    },
    _onChange() {
        console.log("ну посмотрим")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebarFriends = sidebarReducer(this._state.sidebarFriends, action)
        this._onChange()
    }
}