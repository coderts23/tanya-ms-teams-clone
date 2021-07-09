import React , {useRef, useEffect} from 'react';

const AudioTrack = ({track}) => {
    const trackRef = useRef();

    useEffect(() => {
        const audioTrack = track.attach();
        trackRef.current.classList.add(track.kind);
        trackRef.current.appendChild(audioTrack);
    }, []);

    return (
        <div className="track" ref={trackRef}>
        </div>
    );
};

export default AudioTrack;