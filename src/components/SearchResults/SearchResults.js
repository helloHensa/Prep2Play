import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css';

const SearchResults = ({ SearchResults, onAdd }) => {

    const mockSearchResults = [
        { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
        { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
        { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    ];

    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={mockSearchResults} onAdd={onAdd} isRemoval={false} />
        </div>
    );
};

export default SearchResults;