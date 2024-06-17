import React, { useState, useRef } from 'react'
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
    setPlaylistTracks((prevTracks) => prevTracks.filter(
      savedTrack => savedTrack.id !== track.id
    ));
  };

  const search = (term) => {

  };

  return (
    <div>
      <div className="App">
        <SearchBar onSearch={search} />
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} />
      </div>
    </div>
  );
};

export default App;
