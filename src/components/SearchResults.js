import React from 'react';
import Track from './Track';

const SearchResults = ({ results, onAdd }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map(track => (
          <Track key={track.id} track={track} onAdd={onAdd} isRemoval={false} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
