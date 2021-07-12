import React from 'react';
import CheckImg from '../resources/images/check.png'


const OnlyWithAudio = (props) => {
    const {connectOnlyWithAudio, setConnectOnlyWithAudio} = props;

    const handleConnectionTypeChange = () => {
        setConnectOnlyWithAudio(!connectOnlyWithAudio);
    };

    return (
    <div className="checkbox_container">
        <div className="checkbox_connection" 
        onClick={handleConnectionTypeChange}
        >
            {connectOnlyWithAudio && (
                <img className="checkbox_image" src={CheckImg} alt="checkbox"></img>
            )}
        </div>
        <p className="checkbox_container_paragraph">Only audio</p>
    </div>
    );
};

export default OnlyWithAudio;