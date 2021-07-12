import React from 'react';

const RoomNotExistMessage = ({showRoomNotExistMessage}) => {
    return (
        <div className="room_not_found_box">
            {showRoomNotExistMessage && (
                <p className="room_not_found_text">
                    Room does not exist. Please try again.
                </p>
            )}
        </div>
    );
};

export default RoomNotExistMessage;