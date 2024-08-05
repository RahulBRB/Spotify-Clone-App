import React, {useState} from 'react';

const SearchBar = ({setSearchResults}) =>{
    const [ query, setQuery] = useState('');

    const handleSearch = (e)=>{

    };

    return (
        <div>
            <input
            type = "text"
            value = {query}
            onChange = {(e)=>setQuery(e.target.value)}
            placeholder='Search for a song'
            />

            <button onClick = {handleSearch}>Search</button>
        </div>
    )
}