import React, {useState} from 'react'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import YTMusic from 'ytmusic-api';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const ytmusic = new YTMusic();

    const search = async (term) => {
      try {
        await ytmusic.initialize();
        const results = await ytmusic.search(term);
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching for tracks', error);
      }
    };
    
    return(
      <div>
        <h1>Prep2Play</h1>
        <div className="App">
          <SearchBar onSearch={search}/>
          <SearchResults searchResults={searchResults}/>
        </div>
      </div>
    );
};

export default App;
