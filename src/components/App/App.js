import React, { useState, useRef } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const nextId = useRef(1);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      if (!window.confirm("The track is already in the playlist. Do you want to add it again?")) {
        return;
      }
      const newTrack = { ...track, id: `dup-${nextId.current++}` };
      setPlaylistTracks(prevTracks => [...prevTracks, newTrack]);
    } else {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const search = (term) => {
    // Implement search functionality here
  };

  return (
    <div className='App flex h-screen flex-col'>
      <h1 className="App-header text-2xl h-14 align-center font-bold text-white bg-gray-800 text-center">Prep2Play</h1>
      <div className=" px-10 flex-col p-0">
        <SearchBar onSearch={search} />
        <div className="App-playlist flex-1 flex justify-center mb-6">
          <div className="flex w-full max-w-screen-lg flex-col md:flex-row md:space-x-4 md:justify-center gap-5 md:gap-1 ">
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
            <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
