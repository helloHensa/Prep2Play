import React from "react";

const Playlist = ({ playlistTracks}) => {

    return (
        <div>
            <h2>Playlist</h2>
                <ul>
                    {savedTracks.map((track, index) => (
                        <li key={index}>{track.name}</li>
                    ))}
                </ul>
        </div>
    );
};

export default Playlist;