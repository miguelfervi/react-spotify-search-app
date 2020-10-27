import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import Search from '../Search';

const Dashboard = (props) => {
  const { location, signIn } = props;
  const loginData = location.hash;

  useEffect(() => {
    const expiryTime = new Date().getTime() + loginData.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(loginData));
    localStorage.setItem('expiry_time', expiryTime);
    signIn(true);
  }, [signIn, loginData]);

  return (
    <>
      <div className="container">
        <div className="text-centered">
          <Search />
        </div>
      </div>
    </>
  );
};

export default connect(null, { signIn })(Dashboard);
