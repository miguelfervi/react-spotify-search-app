import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGetResult } from '../../actions';
import AlbumList from '../../components/AlbumList';
import '../../index.css';

const Search = ({ initiateGetResult, results }) => {
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

  useEffect(() => {
    if (debouncedTerm) initiateGetResult(debouncedTerm);
  }, [debouncedTerm, initiateGetResult]);

  return (
    <>
      <div className="container">
        <input
          value={term}
          className="search-input"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for album, artist or track"
        ></input>
        <AlbumList results={results}></AlbumList>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps, { initiateGetResult })(Search);
