import React, { useState } from 'react';
import Track from './Track';

const Playlist = ({ tracks, name, onRemove, onSave, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleNameChange = () => {
    onNameChange(newName);
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="playlist">
      <h2>
        {isEditing ? (
          <input 
            type="text" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            onBlur={handleNameChange} // Change name when input loses focus
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleNameChange();
              }
            }} 
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>{name}</span>
        )}
      </h2>
      {tracks.length > 0 ? (
        <ul>
          {tracks.map(track => (
            <Track key={track.id} track={track} onRemove={onRemove} />
          ))}
        </ul>
      ) : (
        <p>No tracks in your playlist</p>
      )}
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
