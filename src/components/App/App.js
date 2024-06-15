import React, {useState} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';


const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
   
    const addTrack = (track) => {
      console.log('add track', track);

    }

    const search = (term) => {

    };
    
    return(
      <div>
        <h1>Prep2Play</h1>
        <div className="App">
          <SearchBar onSearch={search}/>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist />
        </div>
      </div>
    );
};

export default App;
