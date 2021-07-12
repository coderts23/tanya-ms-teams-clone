import React, {useState} from 'react';
import sendMessageButton from '../../resources/images/sendMessageButton.svg'
import { sendMessageUsingDataChannel } from '../../utils';

const NewMessage = () => {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        //Send Message to other user
        sendMessageUsingDataChannel(message, true);
        setMessage("");
    };

    const handleKeyPressed = (event) => {
        if(event.key ==='Enter'){
            event.preventDefault();
            sendMessage();
        }
    };

    const handleTextChange = (event) => {
        setMessage(event.target.value);
    };

    return(
        <div className="new_message_container">
            <input className="new_message_input"
            value={message}
            onChange={handleTextChange} 
            placeholder='Type Your Message'
            type='text'
            onKeyDown={handleKeyPressed}
            />
            <img className="new_message_button"
            src={sendMessageButton}
            onClick={sendMessage} alt="new message"/>
        </div>
    );
};

export default NewMessage;