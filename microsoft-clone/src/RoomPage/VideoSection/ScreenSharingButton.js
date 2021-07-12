import React, {useState} from 'react';
import { LocalVideoTrack } from 'twilio-video';
import SwitchImg from '../../resources/images/switchToScreenSharing.svg'
import LocalScreenSharingPreview from './LocalScreenSharingPreview';

const ScreenSharingButton = ({room}) => {
    const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
    const [screenShareTrack, setScreenShareTrack] = useState(null);
    const [screenShareStream, setScreenShareStream] = useState(null);

    const handleScreenSharing = () => {
        if(!isScreenSharingActive) {
            navigator.mediaDevices.getDisplayMedia()
            .then(stream => {
                setScreenShareStream(stream);
                setIsScreenSharingActive(true);
                const screenTrack  = new LocalVideoTrack(stream.getVideoTracks()[0], {
                    name: "screen-share-track"
                });

                room.localParticipant.publishTrack(screenTrack);
                setScreenShareTrack(screenTrack);

                stream.getVideoTracks()[0].onended = () => {
                    room.localParticipant.unpublishTrack(screenTrack);
                    setScreenShareTrack(false);
                    setIsScreenSharingActive(false);
                };
            }).catch(e => {
                console.error('Could not access share screen', e);
            });
        }else {
            screenShareTrack.stop();
            room.localParticipant.unpublishTrack(screenShareTrack);
            setScreenShareTrack(null);
            setIsScreenSharingActive(false);
        }
    }

    return (
        <>
        <div className="video_button_container">
            <img src={SwitchImg} onClick={handleScreenSharing}
            className="video_button_image"
            alt="video button"/>
        </div>
        {isScreenSharingActive && (
            <LocalScreenSharingPreview stream = {screenShareStream} />
        )}
        </>
    );
};

export default ScreenSharingButton;