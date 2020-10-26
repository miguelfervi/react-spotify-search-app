import React from 'react';
import './../../index.css';

const Filter = (props) => {
  return (
    <div className="btn-group">
      <button
        className="btn-filter"
        onClick={() => props.setCategory('albums')}
      >
        Albums
      </button>
      <button
        className="btn-filter"
        onClick={() => props.setCategory('artists')}
      >
        Artist
      </button>
      <button
        className="btn-filter"
        onClick={() => props.setCategory('tracks')}
      >
        Tracks
      </button>
    </div>
  );
};

export default Filter;
