import React from 'react';
import '../../index.css';
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="text-centered">
          This web application searches in Spotify API filtering by tracks,
          albums and artists.{' '}
          <p>
            You need to create a Spotify account if you do not have, then you
            click on Login, authorize the aplication and finally you search
            whatever you want. <i className="far fa-smile"></i>
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
