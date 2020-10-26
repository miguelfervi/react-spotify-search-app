import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import Search from '../Search';

const Dashboard = (props) => {
  useEffect(() => {
    const { location } = props;
    const loginData = location.hash;

    const expiryTime = new Date().getTime() + loginData.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(loginData));
    localStorage.setItem('expiry_time', expiryTime);
    props.signIn(true);
  });

  return (
    <>
      <Search />
    </>
  );
};

export default connect(null, { signIn })(Dashboard);
