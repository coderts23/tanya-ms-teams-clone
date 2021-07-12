import React from 'react';
import { connect } from 'react-redux';

const OneParticipant = ({ identity, lastItem}) => {
    const particpantName = (identity) => {
        return identity.slice(36, identity.length);
    }
    return (
        <>
        <p className="participants_list">
            {particpantName(identity)}</p>
            {!lastItem && <span className="participants_separator"></span>}
        </>
    );
};

const Participants = ({participants}) => {
    return (
        <div className="participants_box">
            <div className="participants_number">
            Total Participants : {(participants.length +1)}
            </div>
            {participants.map((participant, index) => {
                return (
                    <OneParticipant key={participant.identity}
                    identity={participant.identity}
                    lastItem={participants.length === index + 1}/>
                );
            })}
        </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(mapStoreStateToProps)(Participants);