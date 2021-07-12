import React, { useEffect } from 'react';
import videoCall from '../resources/images/video-call.jpg';
import ConnectButtons from './ConnectButtons';
import { connect } from 'react-redux';
import { setIsRoomHost} from '../store/actions';
import Navbar from './Navbar';
import './IntroPage.css';
import DateTime from './DateTime';


const IntroPage = ({ setIsRoomHostAction }) => {
    useEffect(() => {
        setIsRoomHostAction(false);
    }, []);

    return (
        <div className="row">
        <div className="introduction_page_box col-5">
            <div>
                <Navbar/>
            </div>
            <div className="main_line">
                Making Video Conferences Easy
            </div>
            <div className="tag_line">
            Meet, chat, call, and collaborate in just one place.
            </div>
        <div className="introduction_page_buttons">
        <ConnectButtons/>
        </div>
        </div>
        <div className="join_room_box col-7">
        <div className="date_time">
            <DateTime/>
        </div>
        <div className="introduction_page_image">
            <img src={videoCall} className="video_call_image" alt="logo"/>
        </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
    };
};

export default connect(null, mapDispatchToProps)(IntroPage);