import React, { useEffect } from 'react';
import videoCall from '../resources/images/video-call.jpg';
import ConnectingButtons from './ConnectingButtons';
import { connect } from 'react-redux';
import { setIsRoomHost} from '../store/actions';
import Navbar from './Navbar';
import './IntroductionPage.css';
import DateTime from './DateTime';


const IntroductionPage = ({ setIsRoomHostAction }) => {
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
        <ConnectingButtons/>
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

export default connect(null, mapDispatchToProps)(IntroductionPage);