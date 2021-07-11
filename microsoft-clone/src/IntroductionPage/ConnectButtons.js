import React from 'react';
import ConnectButton from './ConnectButton';
import {useHistory} from 'react-router-dom';

const ConnectButtons = () => {
    let history = useHistory();

    const pushJoinRoomPage = () => {
        history.push('/join-room');
    }

    const pushJoinRoomPageAsHost = () => {
        history.push('/join-room?host=true')
    }
    return (
        <div className='connecting_buttons_container'>
            <ConnectButton
            buttonText='Join a meeting'
            onClickHandler = {pushJoinRoomPage}
            />
            <ConnectButton
            buttonText='Host a meeting'
            createRoomButton
            onClickHandler = {pushJoinRoomPageAsHost}
            />
        </div>
    )
}

export default ConnectButtons;