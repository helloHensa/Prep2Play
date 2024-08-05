import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ playlistTracks, onRemove, onClear }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
};

  const handleSave = (event) => {
    event.preventDefault();

    const trackUris = playlistTracks.map(track => track.uri); 

    console.log("Zapisz te utwory do Spotify:", trackUris, "a nazwa playlisty to:", name); 
    setName("");
    onClear();
  }

  return (
    <div className="playlist md:w-1/2 backdrop-blur-md bg-sky-200/30 shadow-lg rounded-lg flex-1flex flex-col min-h-0">
      <h2 className="pt-1">Playlist</h2>
      <input onChange={handleNameChange} value={name} className="bg-transparent border-b text-center border-gray-200 my-1.5 px-[3%] focus:outline-none focus:border-b w-10/12" placeholder="Name Your Playlist" />
      <div className="overflow-y-auto flex-grow max-h-[calc(50vh-220px)] md:max-h-[calc(100vh-360px)]"> {/* Adjust max-hight*/}
        <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      </div>
      <button onClick={handleSave} className="mt-1 mb-3 self-center rounded-full backdrop-brightness-150 border-transparent p-1.5 px-3 border hover:border-gray-200">Save To Spotify</button>
    </div>
  );
};

export default Playlist;
