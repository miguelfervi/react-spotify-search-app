import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, initiateLoadMoreAlbums } from '../../utils/api';
import AlbumList from '../../components/AlbumList';
import TracksList from '../../components/TracksList';
import ArtistsList from '../../components/ArtistsList';

import '../../index.css';
import Filter from '../Filter';

const Search = ({
  fetchData,
  albums,
  tracks,
  artists,
  initiateLoadMoreAlbums,
}) => {
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
  }, [debouncedTerm, fetchData]);

  const result = { albums, tracks, artists };

  const renderResult = () => {
    if (selectedCategory === 'albums')
      return (
        <AlbumList
          title={selectedCategory}
          term={debouncedTerm}
          albums={result.albums}
          loadMore={loadMore}
        ></AlbumList>
      );
    else if (selectedCategory === 'tracks')
      return (
        <TracksList
          title={selectedCategory}
          term={debouncedTerm}
          tracks={result.tracks}
          loadMore={loadMore}
        ></TracksList>
      );
    else if (selectedCategory === 'artists')
      return (
        <ArtistsList
          title={selectedCategory}
          term={debouncedTerm}
          artists={result.artists}
          loadMore={loadMore}
        ></ArtistsList>
      );
  };
  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const loadMore = async (type) => {
    switch (type) {
      case 'albums':
        await initiateLoadMoreAlbums(albums.next);
        break;

      default:
    }
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
          loadMore={loadMore}
        ></Filter>
        {renderResult()}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.data.albums,
    tracks: state.data.tracks,
    artists: state.data.artists,
  };
};

export default connect(mapStateToProps, { fetchData, initiateLoadMoreAlbums })(
  Search
);
