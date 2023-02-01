import React from 'react';

import axios from 'axios';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {ProfileInfoType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    profileInfo: ProfileInfoType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profileInfo: ProfileInfoType) => void
}

export type ProfilePropsType = MapDispatchPropsType & MapStatePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) //?
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profileInfo={this.props.profileInfo}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
