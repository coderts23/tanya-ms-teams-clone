import React from 'react';
import {useHistory} from 'react-router-dom';

const Button  =({ buttonText, cancelButton, onClickHandler }) => {
    const buttonClassPresent = cancelButton ? 'cancel_button' : 'success_button' ;

    return (
        <button onClick={onClickHandler} className={buttonClassPresent}>
            {buttonText}
        </button>
    );
};

const JoinButtons = ({handleJoinToRoom, isRoomHost}) => {
    const isHostText = isRoomHost ? 'Host' : 'Join';
    const history = useHistory();

    const pushToIntroPage = () => {
        history.push('/');
    };

    return (
        <div className="buttons_container">
            <Button
            buttonText = {isHostText}
            onClickHandler = {handleJoinToRoom}
            />
            <Button
            buttonText= 'Cancel'
            cancelButton
            onClickHandler={pushToIntroPage}
            />
        </div>

    );
};

export default JoinButtons;