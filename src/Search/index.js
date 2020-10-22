import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  return (
    <>
      <input
        className="input"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
    </>
  );
};

export default Search;
