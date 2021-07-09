import React, {useState} from 'react';
import CameraButtonImg from '../../resources/images/camera.svg';
import CameraButtonImgOff from '../../resources/images/cameraOff.svg';

const CameraButton =({room}) => {
    const [isLocalVideotrackDisabled, setIsLocalVideoTrackDisabled] = useState(false);

    const handleCameraButtonPressed = () => {
        isLocalVideotrackDisabled ? startVideo() : stopVideo();

        setIsLocalVideoTrackDisabled(!isLocalVideotrackDisabled)
    }   

    // To Turn Video ON
    const startVideo = () => {
        room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
            localVideoTrackPublication.track.enable();
        });
    }

    // To Turn Video OFF
    const stopVideo = () => {
        room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
            localVideoTrackPublication.track.disable();
        });
    };

    return (
        <div className="video_button_container">
            <img src = {isLocalVideotrackDisabled ? CameraButtonImgOff : CameraButtonImg}
            className="video_button_image"
            onClick={handleCameraButtonPressed}
            alt="camera on/off"/>
        </div>
    );
};

export default CameraButton;