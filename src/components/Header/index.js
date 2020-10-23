import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const onSignOutClick = () => {
    props.signOut();
    props.history.push('/');
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return <button onClick={onSignOutClick}>Log Out</button>;
    } else {
      return <button onClick={handleLogin}>Login</button>;
    }
  };

  return (
    <>
      <div>
        <h1>Spotify Search App</h1>
        {renderAuthButton()}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut })(withRouter(Header));
