import React from 'react';

const RoomTitle =({isRoomHost}) => {

    // TITLE TEXT
    const text =isRoomHost ? 'Host Meeting' : 'Join meeting';

    return (
        <p className="title">{text}</p>
    );
};

export default RoomTitle;