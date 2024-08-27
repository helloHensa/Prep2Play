import React, { useState } from "react";
import "./SearchBar.css";
import icon from './icon.svg';
import right from './right.svg';


const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const search = () => {
        onSearch(term);
    };


    return (

        <div className="flex justify-center m-10">
            <div className="flex items-center border border-gray-300 shadow-md w-full max-w-lg bg-white">
                <input
                    type="text"
                    placeholder="Type song name or creator or album"
                    value={term}
                    onChange={handleTermChange}
                    className="flex-grow p-3 text-gray-700 focus:outline-none"
                />

                <button onClick={search} className="relative w-8 h-8 group me-2 ">
                    <img
                        src={icon}
                        alt="Search Icon"
                        className="text-gray-400 absolute inset-0 w-full h-full p-1 object-contain group-hover:opacity-0 transition-opacity ease-in-out delay-150 hover:delay-300 duration-300"
                    />
                    <img
                        src={right}
                        alt="Search Icon"
                        className="absolute inset-0 w-full h-full p-1 object-contain opacity-0 group-hover:opacity-100 hover:delay-300 transition-opacity ease-in-out duration-300"
                    />
                </button>




            </div>
        </div>
    );
};

export default SearchBar;
