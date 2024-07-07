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
        <div className="Track flex justify-between border-b border-gray-200 text-left my-1.5 mx-[3%]">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div className="flex ms-0 m-2 me-1 rounded hover:backdrop-brightness-150 justify-center sm:backdrop-brightness-50 backdrop-brightness-150">
            {isRemoval ? (
                <button className="Track-action w-7" onClick={removeTrack}>-</button>
            ) : (
                <button className="Track-action w-7" onClick={addTrack}>+</button>                
            )}
            </div>
        </div>
    );
};

export default Track;