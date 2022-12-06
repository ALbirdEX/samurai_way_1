import {v1} from "uuid";

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


//type AddPostActionType = ReturnType<typeof AddPostAC>
   /* type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}*/

//type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostText>
/*type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}*/


export type ActionTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyAC>
    | ReturnType<typeof SendMessageAC>

//export const AddPostAC = (newPostText: string): AddPostActionType => {
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

export const SendMessageAC = (newMessageBody: string) => {
    return{
        type: "SEND-MESSAGE",
        messageText: newMessageBody
    } as const
}

export const UpdateNewMessageBodyAC = (newTextInput: string) => {
    return{
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newBody: newTextInput
    } as const
}


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
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: v1(),
                message: this._state.profilePage.newPostText = action.postText,
                likesCounts: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogPage.newMessageBody = action.newBody
            this._onChange()
        } else if (action.type === "SEND-MESSAGE") {
/*            const newMassage: MessagesType = {
                id: v1(),
                message: this._state.dialogPage.newMessageBody = action.messageText
            }
            this._state.dialogPage.messages.push(newMassage)
            this._state.dialogPage.newMessageBody = 'You message'
            this._onChange()*/

            const textMessage = this._state.dialogPage.newMessageBody
            this._state.dialogPage.messages.push({id: v1(), message: textMessage})
            this._state.dialogPage.newMessageBody = ''
            this._onChange()
        }
    }
}