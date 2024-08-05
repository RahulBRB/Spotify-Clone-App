import React from 'react';

const Track = ({ track, onAdd, onRemove }) => {
  return (
    <li>
      <div>
        <p><strong>{track.name}</strong></p>
        <p>{track.artist}</p>
        <p>{track.album}</p>
        {onAdd && (
          <button onClick={() => onAdd(track)}>Add to Playlist</button>
        )}
        {onRemove && (
          <button onClick={() => onRemove(track)}>Remove from Playlist</button>
        )}
      </div>
    </li>
  );
};

export default Track;
