import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchAlbums } from '../../actions';
import AlbumList from '../../components/AlbumList';
import '../../index.css';

const Search = ({ fetchData, results, albums }) => {
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
    if (debouncedTerm) fetchData(debouncedTerm);
  }, [debouncedTerm, fetchData]);

  return (
    <>
      <div className="container">
        <input
          value={term}
          className="search-input"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for album, artist or track"
        ></input>
        <AlbumList term={debouncedTerm} albums={albums}></AlbumList>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
    albums: state.albums.albums,
  };
};

export default connect(mapStateToProps, { fetchData, fetchAlbums })(Search);
