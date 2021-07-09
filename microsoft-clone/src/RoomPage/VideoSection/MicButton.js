import React, {useState} from 'react';

import MicButtonImg from '../../resources/images/mic.svg';
import MicButtonImgOff from '../../resources/images/micOff.svg';

const MicButton = ({ room }) => {
    const [isMicMuted, setIsMicMuted] = useState(false);

    const handleMicButtonPressed = () => {
        isMicMuted ? unmute() : mute();
        setIsMicMuted(!isMicMuted);
    };

    // To MUTE Audio
    const mute = () => {
        room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
            localAudioTrackPublication.track.disable();
        });
    };

    // To UNMUTE Audio
    const unmute = () => {
        room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
            localAudioTrackPublication.track.enable();
        });
    };

    return (
        <div className="video_button_container">
            <img src={isMicMuted ? MicButtonImgOff : MicButtonImg}
            onClick={handleMicButtonPressed}
            className="video_button_image"
            alt = "mute/unmute"/>
        </div>
    );
};

export default MicButton;