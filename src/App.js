import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { mockPlaylistTracks } from './tracksData';

const App = () => {
  const [searchResults, setSearchResults] = useState(mockPlaylistTracks);  // Initialize with mock data
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');  // Default playlist name

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find(t => t.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(t => t.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);

    // Mock saving to Spotify (print URIs to console)
    console.log('Saving playlist to Spotify:', {
      name: playlistName,
      trackURIs
    });

    // Reset playlist
    setPlaylistTracks([]);
    setPlaylistName('New Playlist');
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} onAdd={addTrackToPlaylist} />
      <Playlist 
        tracks={playlistTracks} 
        name={playlistName} 
        onRemove={removeTrackFromPlaylist} 
        onSave={savePlaylist} 
        onNameChange={updatePlaylistName} 
      />
    </div>
  );
};

export default App;
