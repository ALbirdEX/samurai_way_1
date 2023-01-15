import {v1} from "uuid";

export type LocationType = {
    city: string,
    country: string,
}
export type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
}

export const photoUrl = "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"

const initialState: UsersPageType = {
    users: [
        {
            id: v1(), photoUrl: photoUrl, followed: false, fullName: "Alex", status: "I`m proger", location:
                {city: "Mogilev", country: "Belarus"}
        },
        {
            id: v1(), photoUrl: photoUrl, followed: true, fullName: "Viktor", status: "....", location:
                {city: "Kiev", country: "Ukraine"}
        },
        {
            id: v1(), photoUrl: photoUrl, followed: false, fullName: "Felix", status: "I`m GRUD", location:
                {city: "NY", country: "USA"}
        },
    ]
}

export const usersReducer = (state: UsersPageType = initialState,
                             action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            debugger
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        }
        case "UNFOLLOW": {
            debugger
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...state.users,  action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: userId

    } as const
}

export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const setUsersAC = (users: UserType) => {
    return{
        type: "SET-USERS",
        users: users
    } as const
}

type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

export type UsersActionType = FollowActionType | UnfollowActionType | SetUsersActionType