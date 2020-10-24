import React from 'react';

const AlbumsList = ({ results }) => {
  return (
    <div className="list-view">
      <div className="card-bordered">
        <h1>Title</h1>
        <p>Kappa</p>
      </div>
      <div className="card-bordered">
        <h1>Title</h1>
        <p>Kappa</p>
      </div>
      <div className="card-bordered">
        <h1>Title</h1>
        <p>Kappa</p>
      </div>
      <div className="card-bordered">
        <h1>Title</h1>
        <p>Kappa</p>
      </div>

      {console.log(results)}
    </div>
  );
};

export default AlbumsList;
