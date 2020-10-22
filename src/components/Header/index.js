import React, { useState } from 'react';

const Header = () => {
  const { logged, setLogged } = useState(false);
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    setLogged(true);
  };
  return (
    <>
      <div>
        <h1>Spotify Search App</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Header;
