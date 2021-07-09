import React from 'react';

const JoinRoomTitle =({isRoomHost}) => {

    // TITLE TEXT
    const text =isRoomHost ? 'Host Meeting' : 'Join meeting';

    return (
        <p className="title">{text}</p>
    );
};

export default JoinRoomTitle;