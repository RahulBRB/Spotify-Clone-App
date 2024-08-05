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
    <div>
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
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>{name}</span>
        )}
      </h2>
      <ul>
        {tracks.map(track => (
          <Track key={track.id} track={track} onRemove={onRemove} />
        ))}
      </ul>
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
