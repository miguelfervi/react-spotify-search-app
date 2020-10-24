import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGetResult } from '../../actions';
import AlbumList from '../../components/AlbumList';

const Search = ({ initiateGetResult, results }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term) initiateGetResult(term);
  }, [term]);

  return (
    <>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
      <AlbumList results={results}></AlbumList>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps, { initiateGetResult })(Search);
