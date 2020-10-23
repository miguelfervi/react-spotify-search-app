import React, { useState } from 'react';
const Search = (props) => {
  const [term, setTerm] = useState('');

  return (
    <>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
    </>
  );
};

export default Search;
