import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchData,
  initiateLoadMoreAlbums,
  initiateLoadMoreTracks,
  initiateLoadMoreArtists,
} from '../../utils/api';
import AlbumList from '../../components/AlbumList';
import TracksList from '../../components/TracksList';
import ArtistsList from '../../components/ArtistsList';

import '../../index.css';
import Filter from '../Filter';

const Search = ({
  albums,
  fetchData,
  tracks,
  artists,
  initiateLoadMoreAlbums,
  initiateLoadMoreArtists,
  initiateLoadMoreTracks,
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

  const result = { artists };

  const renderResult = () => {
    if (selectedCategory === 'albums')
      return (
        <AlbumList
          title={selectedCategory}
          term={debouncedTerm}
          albums={albums}
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
          artists={artists}
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
      case 'artists':
        await initiateLoadMoreArtists(artists.next);
        break;
      case 'tracks':
        await initiateLoadMoreTracks(tracks.next);
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
    albums: state.albums.albums,
    artists: state.artists.artists,
  };
};

export default connect(mapStateToProps, {
  fetchData,
  initiateLoadMoreAlbums,
  initiateLoadMoreTracks,
  initiateLoadMoreArtists,
})(Search);
