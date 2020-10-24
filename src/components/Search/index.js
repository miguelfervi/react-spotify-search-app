import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGetResult } from '../../actions';
import AlbumList from '../../components/AlbumList';
import '../../index.css';

const Search = ({ initiateGetResult, results }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term) initiateGetResult(term);
  }, [term, initiateGetResult]);

  return (
    <>
      <div className="div1">
        <input
          value={term}
          className="ant-input"
          onChange={(e) => setTerm(e.target.value)}
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
