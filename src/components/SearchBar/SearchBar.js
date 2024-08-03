import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({onSearch}) => { 
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const search = () => {
        onSearch(term);
    };

  
    return(
        
        <div className="flex justify-center m-10">
            <div className="flex items-center border border-gray-300 shadow-md w-full max-w-lg bg-white">
                <input
                type="text"
                placeholder="Type song name or creator or album"
                value={term}
                onChange={handleTermChange}
                className="flex-grow p-3 text-gray-700 focus:outline-none"
                />
                <button
                onClick={search}
                    className="bg-sky-700/70 text-white p-3 hover:bg-sky-700/90 focus:outline-none"
                >
                Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
