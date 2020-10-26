import React, { useState, useEffect } from 'react';
import SearchResult from '../SearchResult';

import '../../index.css';

const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  return (
    <>
      <>
        <input
          value={term}
          className="search-input"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for album, artist or track"
        ></input>
        <SearchResult debouncedTerm={debouncedTerm}></SearchResult>
      </>
    </>
  );
};

export default Search;
