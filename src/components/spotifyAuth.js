const CLIENT_ID = '844876e388a04954bac8fba5ed951770'; 
const REDIRECT_URI = 'http://localhost:3000'; 
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_KEY = 'spotifyAccessToken';
const EXPIRATION_KEY = 'spotifyTokenExpiration';

// Scopes for the app
const SCOPES = ['playlist-modify-public', 'playlist-modify-private'];

// Function to get the authorization URL
export const getAuthUrl = () => {
  const scope = SCOPES.join('%20');
  return `${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
};

// Function to extract access token and expiration time from URL
export const handleRedirect = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);

  const accessToken = params.get('access_token');
  const expiresIn = params.get('expires_in');

  if (accessToken) {
    storeAccessToken(accessToken, expiresIn);
    clearUrlHash(); // Clear the URL hash
    window.location.href = '/'; // Redirect to home or another page
  } else {
    console.error('Access token not found in URL');
  }
};

// Function to store access token and expiration time
export const storeAccessToken = (token, expiresIn) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(EXPIRATION_KEY, Date.now() + expiresIn * 1000); // Convert seconds to milliseconds
};

// Retrieve the access token from local storage
export const getStoredAccessToken = () => {
  const expiration = localStorage.getItem(EXPIRATION_KEY);
  if (Date.now() > expiration) {
    clearAccessToken(); // Clear expired token
    return null;
  }
  return localStorage.getItem(TOKEN_KEY);
};

// Clear access token from local storage
export const clearAccessToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRATION_KEY);
};

// Clear URL hash
const clearUrlHash = () => {
  window.history.replaceState(null, null, window.location.pathname);
};

// Utility function to make requests to the Spotify API
export const fetchFromSpotify = async (endpoint, options = {}) => {
  const token = getStoredAccessToken();
  if (!token) {
    throw new Error('No valid access token available');
  }

  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error.message);
  }

  return response.json();
};
