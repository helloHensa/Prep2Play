import React from "react";
import './Track.css';

const Track = ({ track, onAdd, isRemoval, onRemove }) => {
    const addTrack = () => {
        onAdd(track);
    };

    const removeTrack = () => {
        onRemove(track);
    };

    return(
        <div className="Track flex">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div className="flex">
            {isRemoval ? (
                <button className="Track-action" onClick={removeTrack}>-</button>
            ) : (
                <button className="Track-action" onClick={addTrack}>+</button>                
            )}
            </div>
        </div>
    );
};

export default Track;