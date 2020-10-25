import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchData,
  fetchAlbums,
  fetchTracks,
  fetchArtists,
} from '../../actions';
import AlbumList from '../../components/AlbumList';
import TracksList from '../../components/TracksList';
import ArtistsList from '../../components/ArtistsList';

import '../../index.css';
import Filter from '../Filter';

const Search = ({ fetchData, albums, tracks, artists }) => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [selectedCategory, setSelectedCategory] = useState('albums');

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
    setSelectedCategory('albums');
  }, [debouncedTerm, fetchData]);

  const result = { albums, tracks, artists };

  const renderResult = () => {
    if (selectedCategory === 'albums')
      return (
        <AlbumList term={debouncedTerm} albums={result.albums}></AlbumList>
      );
    else if (selectedCategory === 'tracks')
      return (
        <TracksList term={debouncedTerm} tracks={result.tracks}></TracksList>
      );
    else if (selectedCategory === 'artists')
      return (
        <ArtistsList
          term={debouncedTerm}
          artists={result.artists}
        ></ArtistsList>
      );
  };
  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="container">
        <input
          value={term}
          className="search-input"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for album, artist or track"
        ></input>
        <Filter
          setCategory={setCategory}
          selectedCategory={selectedCategory}
        ></Filter>
        {renderResult()}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums,
    tracks: state.tracks.tracks,
    artists: state.artists.artists,
  };
};

export default connect(mapStateToProps, {
  fetchData,
  fetchAlbums,
  fetchTracks,
  fetchArtists,
})(Search);
