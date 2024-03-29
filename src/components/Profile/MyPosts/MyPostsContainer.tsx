import {addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

/*type MyPostsContainerType = {
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
        <MyPosts
            posts={props.posts}
            postText={newPostTextHandler}
            addPost={addPost}
            newPostText={props.newPostText}/>
    )
}*/
type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
}

/*type MapStatePropsType = ProfilePageType*/

type MapDispatchPropsType = {
    addPost: (newText: string) => void
    postText: (newTextTextarea: string) => void
}

export type MyPostPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newText: string) => {
            dispatch(addPostAC(newText))
        },
        postText: (newTextTextarea: string) => {
            dispatch(updateNewPostTextAC(newTextTextarea))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)