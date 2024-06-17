import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ playlistTracks, onRemove }) => {
    return (
        <div>
            <h2>Playlist</h2>
            <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
            <button>Save To Spotify</button>
        </div>
    );
};

export default Playlist;