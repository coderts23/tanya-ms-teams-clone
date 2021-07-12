import React from 'react';
import {connect} from 'react-redux';

import MicButton from './MicButton';
import LeaveRoomButton from './LeaveRoomButton';
import CameraButton from './CameraButton';
import ScreenSharingButton from './ScreenSharingButton';


const VideoButtons = (props) => {
    const {room, connectOnlyWithAudio} = props;

    return (
        <div className="video_buttons_container">
            <MicButton room={room}/>
            {!connectOnlyWithAudio && <CameraButton room ={room}/>}
            <LeaveRoomButton room={room} />
            <ScreenSharingButton room={room} />
        </div>
    )
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(mapStoreStateToProps)(VideoButtons);