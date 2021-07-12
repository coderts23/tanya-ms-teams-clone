import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { setIsRoomHost } from '../store/actions';
import { useLocation } from 'react-router-dom';
import RoomTitle from './RoomTitle';
import RoomContent from './RoomContent';
import LoadingOverlay from './LoadingOverlay';

import './JoinPage.css';

const JoinPage = (props) => {
    const {setIsRoomHostAction, isRoomHost} = props; 

    const search = useLocation().search;

    useEffect(() => {
        const isRoomHost = new URLSearchParams(search).get("host");
        if(isRoomHost){
            setIsRoomHostAction(true);
        }
    }, []);

    const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
    

    return (
        <div className="join_room_container">
            <div className="join_room_panel">
                <RoomTitle isRoomHost={isRoomHost}/>
                <RoomContent 
                    setShowLoadingOverlay={setShowLoadingOverlay}
                />
            </div>
            {showLoadingOverlay && <LoadingOverlay />}
        </div>
    );

};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
    }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinPage);