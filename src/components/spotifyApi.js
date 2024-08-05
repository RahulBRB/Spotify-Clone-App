const API_BASE_URL = 'https://api.spotify.com/v1';

// Create a new playlist
export const createPlaylist = async (playlistName, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/me/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: playlistName,
        description: 'Playlist created from Jammming app',
        public: false, // true means playlist will be public
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create playlist');
    }

    const data = await response.json();
    return data.id; // Return the new playlist ID
  } catch (error) {
    console.error('Error creating playlist:', error);
    return null;
  }
};
