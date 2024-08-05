import React from 'react';
import { getAuthUrl } from './spotifyAuth';

const Login = () => {
  const handleLogin = () => {
    window.location.href = getAuthUrl();
  };

  return (
    <div>
      <h1>Login to Spotify</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default Login;
