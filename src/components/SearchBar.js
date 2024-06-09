import React, {useState} from "react";

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
            <input 
                placeholder="Type song name or creator or album"
                value={term}
                onChange={handleTermChange}
            />
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;
