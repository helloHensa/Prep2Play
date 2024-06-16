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
        <div className="SearchBar">
            <div className="input">
            <input 
                placeholder="Type song name or creator or album"
                value={term}
                onChange={handleTermChange}
            />
            </div>
            <button className="SearchButton " onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;
