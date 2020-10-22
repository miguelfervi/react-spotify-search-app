import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('https://api.spotify.com/v1/search', {
        params: {
          query: term,
          offset: 0,
          limit: 20,
          type: 'artist,track,album',
        },
      });
    };
    search();
  }, [term]);

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
