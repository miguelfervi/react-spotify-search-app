import React from 'react';
import Header from '../Header';
const Dashboard = () => {
  return (
    <>
      <Header />
      <div>Home</div>
    </>
  );
};
export default Dashboard;

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};
