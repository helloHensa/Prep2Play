import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ playlistTracks, onRemove }) => {
    return (
        <div className="md:w-2/5 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
            <h2>Playlist</h2>
            <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
            <button>Save To Spotify</button>
        </div>
    );
};

export default Playlist;