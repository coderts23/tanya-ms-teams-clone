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

const JoinRoomButtons = ({handleJoinToRoom, isRoomHost}) => {
    const successText = isRoomHost ? 'Host' : 'Join';
    const history = useHistory();

    const pushToIntroductionPage = () => {
        history.push('/');
    };

    return (
        <div className="buttons_container">
            <Button
            buttonText = {successText}
            onClickHandler = {handleJoinToRoom}
            />
            <Button
            buttonText= 'Cancel'
            cancelButton
            onClickHandler={pushToIntroductionPage}
            />
        </div>

    );
};

export default JoinRoomButtons;