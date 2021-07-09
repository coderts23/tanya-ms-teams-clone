import React from 'react';

const Input = ({placeholder, value, changeHandler}) => {
    return (
        <input
        value={value}
        onChange={changeHandler}
        className="join_room_input"
        placeholder={placeholder}
        />
    );
};

const JoinRoomInputs = (props) => {
    const { nameValue, setNameValue, roomIdValue, setRoomIdValue, isRoomHost } = props;

    const handleRoomIdChange = (event) => {
        setRoomIdValue(event.target.value);
    };

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };

    return (
    <div className="inputs_container">
        {!isRoomHost && (
            <Input
            placeholder="Enter meeting ID"
            value={roomIdValue}
            changeHandler={handleRoomIdChange}
            />
            )}
            <Input
            placeholder="Enter your Name"
            value={nameValue}
            changeHandler={handleNameChange}
            />
    </div>
    );
};

export default JoinRoomInputs;