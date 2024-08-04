import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css';

const SearchResults = ({ searchResults, onAdd }) => {
  const mockSearchResults = [
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
  ];

  return (
    <div className="search-results md:w-1/2 backdrop-blur-md bg-lime-200/25 shadow-lg rounded-lg flex-1 flex flex-col min-h-0 pb-1">
      <h2 className="pt-1">Results</h2>
      <div className="overflow-y-auto max-h-[calc(50vh-180px)] md:max-h-[calc(100vh-260px)]">
        <Tracklist tracks={mockSearchResults} onAdd={onAdd} isRemoval={false} />
      </div>
    </div>
  );
};

export default SearchResults;

