import React from 'react';
import { connect } from 'react-redux';

const SingleParticipant = ({ identity, lastItem}) => {
    const getParticpantName = (identity) => {
        return identity.slice(36, identity.length);
    }
    return (
        <>
        <p className="participants_list">
            {getParticpantName(identity)}</p>
            {!lastItem && <span className="participants_separator_line"></span>}
        </>
    );
};

const Participants = ({participants}) => {
    return (
        <div className="participants_box">
            {participants.map((participant, index) => {
                return (
                    <SingleParticipant key={participant.identity}
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