import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchData,
  initiateLoadMoreAlbums,
  initiateLoadMoreTracks,
  initiateLoadMoreArtists,
} from '../../utils/api';
import AlbumsList from '../AlbumsList';
import TracksList from '../../components/TracksList';
import ArtistsList from '../../components/ArtistsList';

import '../../index.css';
import Filter from '../Filter';

const SearchResult = ({
  debouncedTerm,
  albums,
  artists,
  tracks,
  fetchData,
  initiateLoadMoreAlbums,
  initiateLoadMoreTracks,
  initiateLoadMoreArtists,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('albums');

  useEffect(() => {
    if (debouncedTerm) fetchData(debouncedTerm);
  }, [debouncedTerm, fetchData]);

  const renderResult = () => {
    if (selectedCategory === 'albums')
      return (
        <AlbumsList
          title={selectedCategory}
          term={debouncedTerm}
          albums={albums}
          loadMore={loadMore}
        ></AlbumsList>
      );
    else if (selectedCategory === 'tracks')
      return (
        <TracksList
          title={selectedCategory}
          term={debouncedTerm}
          tracks={tracks}
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
      <Filter className="container" setCategory={setCategory}></Filter>
      {renderResult()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums,
    artists: state.artists.artists,
    tracks: state.tracks.tracks,
  };
};

export default connect(mapStateToProps, {
  fetchData,
  initiateLoadMoreAlbums,
  initiateLoadMoreTracks,
  initiateLoadMoreArtists,
})(SearchResult);
