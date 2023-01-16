export type LocationType = {
    city: string,
    country: string,
}
export type PhotosType = {
    small?: string,
    photo: string
}
export type UserType = {
    id: string,
    photos: PhotosType ,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
}

//export const photoUrl = "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"

const initialState: UsersPageType = {users: []}

export const usersReducer = (state: UsersPageType = initialState,
                             action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                //users: [...state.users, ...action.users]  //???
                users: action.users
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

export const setUsersAC = (users: Array<UserType>) => {
    return{
        type: "SET-USERS",
        users: users
    } as const
}

type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

export type UsersActionType = FollowActionType | UnfollowActionType | SetUsersActionType