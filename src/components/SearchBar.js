import React, { useState } from 'react';
import { searchTracks } from './SpotifyApi';
import { getStoredAccessToken } from './spotifyAuth';
import './SearchBar.css';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const token = getStoredAccessToken();
    if (!token) {
      setError('No access token found. Please log in to Spotify.');
      return;
    }

    try {
      const results = await searchTracks(query, token);
      onSearchResults(results);
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Error searching tracks:', err);
      setError('Failed to search tracks. Please try again.');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for tracks"
      />
      <button onClick={handleSearch} disabled={!query.trim()}>Search</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBar;
