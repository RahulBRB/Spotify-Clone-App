import React, { useEffect } from 'react';
import { handleRedirect } from './spotifyAuth';

const AuthHandler = () => {
  useEffect(() => {
    handleRedirect();
  }, []);

  return <div>Loading...</div>;
};

export default AuthHandler;
