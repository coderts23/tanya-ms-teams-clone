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

const JoinInputs = (props) => {
    const { nameValue, setNameValue, roomIdValue, setRoomIdValue, isRoomHost } = props;

    const onRoomIdChange = (event) => {
        setRoomIdValue(event.target.value);
    };

    const onNameChange = (event) => {
        setNameValue(event.target.value);
    };

    // TO JOIN EXISTING MEETING
    return (
    <div className="inputs_container">
        {!isRoomHost && (
            <Input
            placeholder="Enter meeting ID"
            value={roomIdValue}
            changeHandler={onRoomIdChange}
            />
            )}
            <Input
            placeholder="Enter your Name"
            value={nameValue}
            changeHandler={onNameChange}
            />
    </div>
    );
};

export default JoinInputs;