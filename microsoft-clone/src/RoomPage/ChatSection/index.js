import React from 'react';
import ChatTitle from './ChatTitle';
import Messages from './Messages';
import NewMessage from './NewMessage';

const ChatSection = () => {
    return (
        <div className="chat_section_container">
            <ChatTitle />
            <Messages/>
            <NewMessage/>
        </div>
    );
};

export default ChatSection;