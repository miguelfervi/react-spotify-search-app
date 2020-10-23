import React, { useEffect } from 'react';

const Dashboard = (props) => {
  useEffect(() => {
    const { setExpiryTime, location } = props;
    const loginData = location.hash;

    const expiryTime = new Date().getTime() + loginData.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(loginData));
    localStorage.setItem('expiry_time', expiryTime);
    setExpiryTime(expiryTime);
  });
  return (
    <>
      <div>Dashboard</div>
    </>
  );
};
export default Dashboard;
