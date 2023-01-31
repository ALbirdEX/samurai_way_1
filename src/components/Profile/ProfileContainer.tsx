import React from 'react';
/*
import axios from 'axios';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {ProfilePageType, setUserProfile} from "../../redux/profile-reducer";

type MapStatePropsType = ProfilePageType

type MapDispatchPropsType = {
    setUserProfile: (profile: {}) => void
    profile: any
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class ProfileContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state: ProfilePageType): MapStatePropsType => {
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps, setUserProfile)(ProfileContainer)*/
