import React, {useState} from 'react';
import { connect } from 'react-redux';
import JoinInputs from './JoinInputs';
import OnlyWithAudio from './OnlyWithAudio';
import { setConnectOnlyWithAudio, setIdentity, setRoomId } from '../store/actions';
import RoomNotExistMessage from './RoomNotExistMessage';
import JoinButtons from './JoinButtons';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import {checkIfRoomExists} from '../utils/twilioUtils';

const RoomContent = (props) => {
    const { isRoomHost,  setConnectOnlyWithAudioAction, connectOnlyWithAudio, setRoomIdAction, setIdentityAction, setShowLoadingOverlay} = props;

    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] =useState("");
    const [showRoomNotExistMessage, setShowRoomNotExistMessage] = useState(false);

    const history = useHistory();

    const handleJoinToRoom = async () => {
        setIdentityAction(nameValue);
        if(!isRoomHost){
            setShowLoadingOverlay(true);
            const roomExists = await checkIfRoomExists(roomIdValue);
            setShowLoadingOverlay(false);
            if(roomExists) {
                setRoomIdAction(roomIdValue);
                history.push('/room');
            }else {
                setShowRoomNotExistMessage(true);
            }
        }else{
            setRoomIdAction(uuidv4());
            history.push('/room');
        }
    };

    return (
        <>
        <JoinInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
        />
        <OnlyWithAudio
        setConnectOnlyWithAudio = {setConnectOnlyWithAudioAction}
        connectOnlyWithAudio = {connectOnlyWithAudio}
        />
        <RoomNotExistMessage showRoomNotExistMessage={showRoomNotExistMessage}/>
        <JoinButtons isRoomHost={isRoomHost} handleJoinToRoom={handleJoinToRoom}/>
        </>
    );
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudioAction: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
        setIdentityAction: (identity) => dispatch(setIdentity(identity)),
        setRoomIdAction: (id) => dispatch(setRoomId(id))
    };
};

const mapStoreStateToProps =(state) => {
    return {
        ...state,
    };
};


export default connect(mapStoreStateToProps, mapDispatchToProps)(RoomContent);