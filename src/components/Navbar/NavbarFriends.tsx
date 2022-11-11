import React from 'react';

type FriendsPropsType = {
    name: string
}

export function NavbarFriends (props: FriendsPropsType) {
    return (
        <div>
            {props.name}
        </div>
    )
}