import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <button onClick={() => props.setCategory('albums')}>Albums</button>
      <button onClick={() => props.setCategory('artists')}>Artist</button>
      <button onClick={() => props.setCategory('tracks')}>Tracks</button>
      <div>{props.selectedCategory}</div>
    </div>
  );
};

export default Filter;
