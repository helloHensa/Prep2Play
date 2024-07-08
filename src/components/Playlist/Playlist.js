import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ playlistTracks, onRemove }) => {
  return (
    <div className="flex-grow backdrop-blur-md bg-sky-200/30 shadow-lg rounded-lg flex-1 min-h-0 overflow-hidden">
      <h2 className="pt-1">Playlist</h2>
      <input className="bg-transparent border-b text-center border-gray-200 my-1.5 px-[3%] focus:outline-none focus:border-b" placeholder="Name Your Playlist" />
      <div className="overflow-auto sm:h-[80%] h-[30vh]">
        <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      </div>
      <button className="mt-1 mb-3 rounded-full backdrop-brightness-150 border-transparent p-1.5 px-3 border hover:border-gray-200">Save To Spotify</button>
    </div>
  );
};

export default Playlist;
