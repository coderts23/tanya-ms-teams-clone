import React from 'react';
import Participants from './Participants';
import ParticipantsTitle from'./ParticipantsTitle';

const ParticipantsSection =() => {
    return (
        <div className="participants_section_container">
            <ParticipantsTitle />
            <Participants/>
        </div>
    );
};

export default ParticipantsSection;