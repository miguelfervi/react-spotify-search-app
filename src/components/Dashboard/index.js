import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

const Dashboard = (props) => {
  useEffect(() => {
    const { setExpiryTime, location } = props;
    const loginData = location.hash;

    const expiryTime = new Date().getTime() + loginData.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(loginData));
    localStorage.setItem('expiry_time', expiryTime);
    setExpiryTime(expiryTime);
    props.signIn();
  });

  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

export default connect(null, { signIn, signOut })(Dashboard);
