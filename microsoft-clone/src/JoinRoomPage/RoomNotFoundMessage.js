import React from 'react';

const RoomNotFoundMessage = ({showRoomNotFoundMessage}) => {
    return (
        <div className="room_not_found_box">
            {showRoomNotFoundMessage && (
                <p className="room_not_found_text">
                    Room has not been found. Please try again.
                </p>
            )}
        </div>
    );
};

export default RoomNotFoundMessage;