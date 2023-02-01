import {v1} from "uuid";
import {ProfileActionType} from "./profile-reducer";
import {DialogActionType} from "./dialogs-reducer";

type FriendsType = {
    id: string,
    name: string,
}
type MessagesType = {
    id: string,
    message: string
}
type DialogsType = {
    id: string,
    name: string,
}
type PostsType = {
    id: string,
    message: string,
    likesCounts: number
}
type ProfilesPageType = {
    posts: PostsType[]
    newPostText: string
}
type DialogPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody: string
}
type SidebarFriendsType = {
    friends: FriendsType[]
}

type RootStateType = {
    profilePage: ProfilesPageType,
    dialogPage: DialogPageType,
    sidebarFriends: SidebarFriendsType,
}

type StoreType = {
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

type ActionTypes = ProfileActionType | DialogActionType


/*
const store: StoreType = {
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
       /!* this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebarFriends = sidebarReducer(this._state.sidebarFriends, action)
        this._onChange()*!/
    }
}*/
