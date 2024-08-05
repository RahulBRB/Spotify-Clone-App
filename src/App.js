import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

const App = () =>{
  const [SearchResults, setSearchResults] = useState([]);
  const [PlaylistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) =>{
    setPlaylistTracks([...PlaylistTracks, track]);
  };

  const removeTrackFromPlaylist = (track) =>{
    setPlaylistTracks(PlaylistTracks.filter(i=> i.id !== track.id));
  };

  const savePlaylist = () =>{

  };

  return (
    <div>
      <h1>Spotify Playlist App</h1>
      <SearchBar setSearchResults={setSearchResults}/>
      <SearchResults results={SearchResults} onAdd={addTrackToPlaylist} />
      <Playlist tracks={PlaylistTracks} onRemove={removeTrackFromPlaylist} onSave={savePlaylist}/>
    </div>
  )
} 



export default App;